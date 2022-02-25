import styled from "styled-components";

const Button = styled('button')`
  background-color: ${props => props.disabled ? '#6c757d' : '#3a83f9'};
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;

  :hover {
    border: 1px solid ${props => props.disabled ? '#6c757d' : '#3a83f9'};
    background-color: ${props => props.disabled ? '#6c757d' : 'transparent'};
    color: ${props => props.disabled ? '#fff' : '#3a83f9'};
    text-align: center;
    border-radius: 4px;
  }

  :disabled {
    cursor: default;
  }
`
export default Button;