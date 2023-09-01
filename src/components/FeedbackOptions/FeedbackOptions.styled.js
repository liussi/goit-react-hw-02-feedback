import styled from '@emotion/styled';

const Button = styled.button`
padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  text-transform: capitalize;
  margin-left: 20px;
  transition-duration: 300ms;
  &:hover {
    color: white;
    scale: 1.05;
    -webkit-box-shadow: -12px 12px 5px 0px rgba(5, 5, 5, 0.30);
      -moz-box-shadow: -12px 12px 5px 0px rgba(5, 5, 5, 0.30);
      box-shadow: -12px 12px 5px 0px rgba(5, 5, 5, 0.30);
  }
`
export default Button;