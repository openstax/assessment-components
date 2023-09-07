const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const rename = util.promisify(fs.rename);
const args = process.argv.slice(2);

const argError = (msg) => {
  console.error(msg);
  process.exit(1);
};

let token, bookUrl, debugMode;

for (const [i, arg] of args.entries()) {
  switch (arg) {
  case '-t':
    token = args[i + 1];
    break;
  case '--debug':
    debugMode = true;
    break;
  default:
    if (!args[i - 1] || args[i - 1] !== '-t') {
      bookUrl = arg;
    }
    break;
  }
}
if (!token) {
  argError('Token is required');
}
if (!bookUrl) {
  argError('Book URL is required');
}

const findChapterData = (obj) => {
  let chapters = [];
  obj.forEach(item => {
    if (item.tocType === 'chapter') {
      chapters.push({
        orn: item.orn,
        title: item.titleParts?.title,
        number: item.titleParts?.number
      });
    }
    if (Array.isArray(item.contents)) {
      chapters = chapters.concat(findChapterData(item.contents));
    }
  });
  return chapters;
};

fetch(bookUrl)
  .then(res => res.json())
  .then(async (json) => {
    const bookTitle = json.title;
    const bookSlug = json.slug;
    const chapters = findChapterData(json.contents);
    for (const { orn, title, number } of chapters) {
      const opts = `-o "${bookTitle}: ${title}" -t ${token} tag:\\"assessment:practice:${orn}\\"`;
      console.log(`Generating ${title}...`);
      await exec(`yarn download-json-to-pdf ${opts}`).then(({ stdout, stderr }) => {
        if (debugMode) {
          console.log(stdout);
          console.error(stderr);
        }
      });

      const dirPath = path.join(__dirname, '..', 'tmp', 'eoc-exercises', bookTitle.replace(/\s/g, '-'));
      fs.mkdirSync(dirPath, { recursive: true });

      const oldPath = path.join(__dirname, '..', 'exercises.pdf');
      const newPath = path.join(dirPath, `${title.replace(/\s/g, '-')}.pdf`);

      await rename(oldPath, newPath);
      console.log(`Output ${newPath.toString()}`);
    }
  })
  .catch(err => console.error(err));
