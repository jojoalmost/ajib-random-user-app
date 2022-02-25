import styled from "styled-components";

const Select = styled('select')`
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  appearance: none;

  :focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 5px rgb(128 189 255 / 50%);
  }

`
export default Select;