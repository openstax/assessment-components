import { debounce, once } from 'lodash';
import { isEmpty, memoize } from 'lodash/fp.js';
import WeakMap from 'weak-map';

declare global {
  interface Window {
    MathJax?: any;
    __debugMathJax?: boolean;
  }
}

const MATH_MARKER_BLOCK  = '\u200c\u200c\u200c'; // zero-width non-joiner
const MATH_MARKER_INLINE = '\u200b\u200b\u200b'; // zero-width space

const MATH_RENDERED_CLASS = 'math-rendered';
const MATH_MARKED_CLASS = 'math-marked';
const MATH_DATA_SELECTOR = `[data-math]:not(.${MATH_RENDERED_CLASS})`;
const MATH_ML_SELECTOR   = `math:not(.${MATH_RENDERED_CLASS})`;
const COMBINED_MATH_SELECTOR = `${MATH_DATA_SELECTOR}, ${MATH_ML_SELECTOR}`;
const MATHJAX_CONFIG = {
  extensions: [],
  showProcessingMessages: false,
  skipStartupTypeset: true,
  styles: {
    '#MathJax_MSIE_Frame': {
      left: '', right: 0, visibility: 'hidden',
    },
    '#MathJax_Message': {
      left: '', right: 0, visibility: 'hidden',
    },
  },
  tex2jax: {
    displayMath: [[MATH_MARKER_BLOCK, MATH_MARKER_BLOCK]],
    inlineMath:  [[MATH_MARKER_INLINE, MATH_MARKER_INLINE]],
  },
};

const findProcessedMath = (root: Element): Element[] => Array.from(root.querySelectorAll('.MathJax math'));
const findUnprocessedMath = (root: Element): Element[] => {
  const processedMath = findProcessedMath(root);
  return Array.from(root.querySelectorAll('math')).filter((node) => processedMath.indexOf(node) === -1);;
};

const findLatexNodes = (root: Element): Element[] => {
  const latexNodes: Element[] = [];
  for (const node of Array.from(root.querySelectorAll(MATH_DATA_SELECTOR))) {
    const formula = node.getAttribute('data-math');

    // Set textContent once so that resolveOrWait calls don't
    // undo a MathJax pass before rendered class is applied
    if (!node.classList.contains(MATH_MARKED_CLASS)) {
      node.textContent = (node.tagName.toLowerCase() === 'div')
        ? `${MATH_MARKER_BLOCK}${formula}${MATH_MARKER_BLOCK}`
        : `${MATH_MARKER_INLINE}${formula}${MATH_MARKER_INLINE}`;
      node.classList.add(MATH_MARKED_CLASS);
    }
    latexNodes.push(node);
  }

  return latexNodes;
};

const typesetLatexNodes = (latexNodes: Element[], windowImpl: Window) => () => {
  if (isEmpty(latexNodes)) {
    return;
  }

  windowImpl.MathJax.Hub.Queue(
    () => windowImpl.MathJax.Hub.Typeset(latexNodes),
    markLatexNodesRendered(latexNodes)
  );
};

const typesetMathMLNodes = (root: Element, windowImpl: Window) => () => {
  const mathMLNodes = findUnprocessedMath(root);

  if (isEmpty(mathMLNodes)) {
    return;
  }

  // style the entire document because mathjax is unable to style individual math elements
  windowImpl.MathJax.Hub.Queue(
    () => windowImpl.MathJax.Hub.Typeset(root)
  );
};

const markLatexNodesRendered = (latexNodes: Element[]) => () => {
  // Queue a call to mark the found nodes as rendered so are ignored if typesetting is called repeatedly
  // uses className += instead of classList because IE
  const result = [];
  for (const node of latexNodes) {
    result.push(node.className += ` ${MATH_RENDERED_CLASS}`);
  }
};

// Search document for math and [data-math] elements and then typeset them
function typesetDocument(root: Element, windowImpl: Window) {
  const latexNodes = findLatexNodes(root);

  windowImpl.MathJax.Hub.Queue(
    typesetLatexNodes(latexNodes, windowImpl),
    typesetMathMLNodes(root, windowImpl)
  );
}

const resolveOrWait = (root: Element, resolve: () => void, remainingTries = 5) => {
  if (
    remainingTries > 0
    && (findLatexNodes(root).length || findUnprocessedMath(root).length)
  ) {
    setTimeout(() => {
      resolveOrWait(root, resolve, remainingTries - 1);
    }, 200);
  } else {
    resolve();
  }
};

const typesetDocumentPromise = (root: Element, windowImpl: Window): Promise<void> => new Promise((resolve) => {
  typesetDocument(root, windowImpl);
  windowImpl.MathJax.Hub.Queue(() => {
    resolveOrWait(root, resolve);
  });
});

// memoize'd getter for typeset document function so that each node's
// typeset has its own debounce
const getTypesetDocument = memoize((root, windowImpl) => {
  // Install a debounce around typesetting function so that it will only run once
  // every Xms even if called multiple times in that period
  return debounce(typesetDocumentPromise, 100, {
    leading: true,
    trailing: false,
  }).bind(null, root, windowImpl);
});
getTypesetDocument.cache = new WeakMap();

// typesetMath is the main exported function.
// It's called by components like HTML after they're rendered
const typesetMath = async (root: Element, windowImpl = window) => {
  await startMathJax();

  // check if MathJax is setup
  if (!(windowImpl && windowImpl.MathJax && windowImpl.MathJax.Hub)) {
    console.warn('Warning: Expected MathJax to be initialized.');
    return Promise.resolve();
  }

  // schedule a Mathjax pass if there is at least one [data-math] or <math> element present
  if (root.querySelector(COMBINED_MATH_SELECTOR)) {
    return getTypesetDocument(root, windowImpl)();
  }

  return Promise.resolve();
};

const startMathJax: (windowImpl?: Window) => Promise<void> = once((windowImpl: Window = window) => new Promise((resolve) => {
  const configuredCallback = () => {
    // there doesn't seem to be a config option for this
    windowImpl.MathJax.HTML.Cookie.prefix = 'mathjax';
    // proceed with mathjax initi
    windowImpl.MathJax.Hub.Configured();
    windowImpl.MathJax.Hub.Register.StartupHook('End', () => {
      resolve();
    });
  };

  if (!document.getElementById('MathJax-Script')) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured';
    script.id = 'MathJax-Script';
    script.async = true;
    document.head.appendChild(script);
  }

  if (windowImpl.MathJax && windowImpl.MathJax.Hub) {
    windowImpl.MathJax.Hub.Config(MATHJAX_CONFIG);
    // Does not seem to work when passed to Config
    windowImpl.MathJax.Hub.processSectionDelay = 0;
    configuredCallback();
  } else {
    // If the MathJax.js file has not loaded yet:
    // Call MathJax.Configured once MathJax loads and
    // loads this config JSON since the CDN URL
    // says to `delayStartupUntil=configured`
    (MATHJAX_CONFIG as any).AuthorInit = configuredCallback;
    windowImpl.MathJax = MATHJAX_CONFIG;
  }
}));

export {
  typesetMath,
  startMathJax,
};
