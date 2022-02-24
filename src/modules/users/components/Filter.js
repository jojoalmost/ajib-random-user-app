import React from "react";
import InputSearch from "./InputSearch";
import SelectGender from "./SelectGender";
import styled from "styled-components";

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