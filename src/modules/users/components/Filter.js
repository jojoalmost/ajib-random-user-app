import React from "react";
import styled from "styled-components";
import {InputSearch, SelectGender} from "./index";

const Filter = ({onChangeSearch, onChangeGender}) => {
    return (
        <Wrapper>
            <InputSearch onChange={onChangeSearch}/>
            <SelectGender onChange={onChangeGender}/>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export default Filter;