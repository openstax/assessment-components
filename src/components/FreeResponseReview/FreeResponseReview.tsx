import React from "react";
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

export const FreeResponseReview = ({ free_response, previewMode }: {
  free_response?: string;
  previewMode?: boolean;
}) => {

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
            ref={textRef}
            expanded={expanded}
            isOverflowing={isOverflowing}
          >
            {free_response}
          </FreeResponseText>
        : free_response
      }
      {previewMode && (isOverflowing || expanded) && (
        <ReadMoreLink onClick={() => setExpanded(!expanded)}>
          {expanded ? "show less" : "read more"}
        </ReadMoreLink>
      )}
    </FreeResponseContainer>
  );
}