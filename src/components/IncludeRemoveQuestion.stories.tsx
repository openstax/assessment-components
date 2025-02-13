import React from "react";
import { IncludeRemoveQuestion } from "./IncludeRemoveQuestion";

export const Default = () => {
  const [buttonVariant, setButtonVariant] = React.useState<'include' | 'remove'>('include');
  return (
    <IncludeRemoveQuestion
        buttonVariant={buttonVariant}
        onIncludeHandler={() => setButtonVariant('remove')}
        onRemoveHandler={() => setButtonVariant('include')}
    />
  );
};