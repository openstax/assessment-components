import React from "react";
import { faPlus, faMinus, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { StyledContainer, StyledButton, StyledIcon } from "./styles";

export interface IncludeRemoveQuestionProps {
  // Prop that defines the variant of the button
  buttonVariant: 'include' | 'remove';
  // Method invoked when the include button is clicked
  onIncludeHandler: () => void;
    // Method invoked when the remove button is clicked
  onRemoveHandler: () => void;
}

export const IncludeRemoveQuestion = ({buttonVariant, onIncludeHandler, onRemoveHandler }: IncludeRemoveQuestionProps) => {

    const buttonIcon = React.useMemo(() => buttonVariant === 'include' ? faPlus : faMinus, [buttonVariant]);
    const onClickHandler = (variant: 'include' | 'remove') => { 
        switch (variant) {
            case 'include':
              onIncludeHandler();
              break;
            case 'remove':
              onRemoveHandler();
              break;
            default:
              break;
          }
    };

    const generateButtonText = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1) + ' question';
    };
    
    return (
        <StyledContainer>
            <StyledButton className={buttonVariant} onClick={() => onClickHandler(buttonVariant)} aria-label={buttonVariant}>
                <StyledIcon className={buttonVariant} icon={buttonIcon} aria-label={buttonVariant + ' question'} border size="lg" />
                <span>{generateButtonText(buttonVariant)}</span>
            </StyledButton>
            <StyledButton className="details" aria-label="details">
                <StyledIcon className="details" icon={faEllipsisH} border size="lg"/>
                <span>Details</span>
            </StyledButton>
        </StyledContainer>
    );
}; 