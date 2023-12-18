import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   console.log(options[0]);
  return (
    <ButtonBox>
      {options.map(option => (
        <Button onClick={() => onLeaveFeedback(option)} key={option}>
          {option}
        </Button>
      ))}
    </ButtonBox>
  );
};
