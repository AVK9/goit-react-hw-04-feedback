import { Paragraf } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <Paragraf>Good {good}</Paragraf>
    <Paragraf>Neutral {neutral}</Paragraf>
    <Paragraf>Bad {bad}</Paragraf>
    <Paragraf>Total {total}</Paragraf>
    <Paragraf>Positive feedback {positivePercentage}%</Paragraf>
  </>
);
