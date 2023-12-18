import styled from '@emotion/styled'

export const Paragraf = styled.p`
  color: ${props=>props.theme.colors.mainBackground};
  font-weight: ${props=>props.theme.fontWeight.bold};
  font-size: ${props=>props.theme.fontSizes.small};
  /* background-color: ${props => props.theme.colors.mainBackground}; */
    background-color: ${({ theme }) => theme.colors.mainBackground};
  
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: ${props=>props.theme.shadows.text};
`