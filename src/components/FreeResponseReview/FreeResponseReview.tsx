import React from "react";
import { showMoreLabel } from "../../utils";
import { 
  FreeResponseDefaultContainer, 
  FreeResponseExpandedContainer, 
  FreeResponseText, 
  ReadMoreLink, 
  COLLAPSED_HEIGHT 
} from "./FreeResponseReview.styles";

const FreeResponseContainer = (
  { children, previewMode }: { children: React.ReactNode, previewMode: boolean | undefined }
) => {
    return (
      previewMode 
        ? <FreeResponseExpandedContainer>{children}</FreeResponseExpandedContainer>
        : <FreeResponseDefaultContainer>{children}</FreeResponseDefaultContainer>
    );
  };

let reviewCount = 0;

export const FreeResponseReview = ({ id, free_response, previewMode, questionNumber }: {
  id?: string;
  free_response?: string;
  previewMode?: boolean;
  questionNumber?: number;
}) => {

  // React 17 has no useId: a caller that gives no id still gets one the button can point at
  const [generatedId] = React.useState(() => `free-response-review-${++reviewCount}`);
  const textId = id ?? generatedId;
  const [expanded, setExpanded] = React.useState(false);
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const textRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (previewMode && textRef.current) {
      const isTextOverflowing =
        !expanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10; // px
      setIsOverflowing(isTextOverflowing);
    }
  }, [free_response, previewMode, expanded]);


  if (!free_response) { return null; }

  return (
    <FreeResponseContainer previewMode={previewMode}>
      {previewMode 
        ? <FreeResponseText
            id={textId}
            ref={textRef}
            expanded={expanded}
            isOverflowing={isOverflowing}
          >
            {free_response}
          </FreeResponseText>
        : free_response
      }
      {previewMode && (isOverflowing || expanded) && (
        <ReadMoreLink
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={textId}
          aria-label={showMoreLabel(expanded, questionNumber === undefined ? undefined : `for question ${questionNumber}`)}
        >
          {expanded ? "show less" : "show more"}
        </ReadMoreLink>
      )}
    </FreeResponseContainer>
  );
}