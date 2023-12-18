import { Box, Paragraf } from './Notification.styled';

export const Notification = ({ message }) => (
  <Box>
    <Paragraf>{message}</Paragraf>
  </Box>
);
