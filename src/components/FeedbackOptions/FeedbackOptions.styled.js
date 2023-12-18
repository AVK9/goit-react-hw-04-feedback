import styled from '@emotion/styled'

export const ButtonBox = styled.div`
display: flex;
`
export const Button = styled.button`
height: 80px;
  width: 80px;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12);
  border-radius: 50%;
  border: 8px solid #ececec;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: capitalize;
  margin-right: 10px;
  color: #7a7a7a;
  font-weight: 700;
  font-size: 15px;
  background-color: #7a7a7a;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 1px;

  &:hover,
  &:focus {
     font-weight: 700;
  scale: 1.05;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
    10px 10px 15px rgba(70, 70, 70, 0.12),
    inset -10px -10px 15px rgba(255, 255, 255, 0.5),
    inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  }

  &:focus {
  background-color: #15e38a;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 1px;
  }
  /* background-color: ${props => {
    switch (props.tupeswq) {
        case 'free':
            return '#fff';
           case 'paid':
            return '#aaa';
           case 'vip':
            return '#ffa';
        default:
           return '#000';
    }
  }} */
`
