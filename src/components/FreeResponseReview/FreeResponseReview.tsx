import React from "react";
import { 
  FreeResponsePlainContainer, 
  FreeResponseExpandedContainer, 
  FreeResponseText, 
  ReadMoreLink, 
  COLLAPSED_HEIGHT 
} from "./FreeResponseReview.styles";

export const FreeResponseReview = ({ free_response, previewMode }: {
  free_response?: string;
  previewMode?: boolean;
}) => {

  const [expanded, setExpanded] = React.useState(false);
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const textRef = React.useRef<HTMLDivElement>(null);

  const FreeResponseContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      previewMode 
        ? <FreeResponseExpandedContainer>{children}</FreeResponseExpandedContainer>
        : <FreeResponsePlainContainer>{children}</FreeResponsePlainContainer>
    );
  };

  React.useEffect(() => {
    if (previewMode && textRef.current) {
      const isTextOverflowing = textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10; // px
      setIsOverflowing(isTextOverflowing);
    }
  }, [free_response, previewMode]);


  if (!free_response) { return null; }

  return (
    <FreeResponseContainer>
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
      {previewMode && isOverflowing && (
        <ReadMoreLink onClick={() => setExpanded(!expanded)}>
          {expanded ? "show less" : "read more"}
        </ReadMoreLink>
      )}
    </FreeResponseContainer>
  );
}