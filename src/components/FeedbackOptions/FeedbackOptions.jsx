import React from 'react';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
