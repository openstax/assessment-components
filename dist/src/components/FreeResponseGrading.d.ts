import React from 'react';
import { ID } from 'src/types';
export interface FreeResponseGradingProps {
    questionId: ID;
    maxScore: number;
    score?: number;
    comment?: string;
    onChange?: (data: {
        score: number;
        comment: string;
    }) => void;
    onSave?: (questionId: ID, data: {
        score: number;
        max: number;
        comment: string;
    }) => Promise<void> | void;
    disabled?: boolean;
    gradingTimestamp?: string | number;
}
export declare const FreeResponseGrading: React.FC<FreeResponseGradingProps>;
