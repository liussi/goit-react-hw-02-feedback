import React from "react";
import Button from "./FeedbackOptions.styled";

const FeedbackOptions = ({options, onLeaveFeedback}) => (
         <div>
        {options.map(option => (
          <Button key={option} type='button' onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        ))}
      </div> 
)
 
export default FeedbackOptions;