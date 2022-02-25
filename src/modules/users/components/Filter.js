import React from "react";
import styled from "styled-components";
import {InputSearch, SelectGender} from "./index";
import {useUserList} from "../../../utils/context/UsersProvider";

const Filter = () => {
    const {onSearch, onFilterGender} = useUserList()
    return (
        <Wrapper>
            <InputSearch onChange={onSearch}/>
            <SelectGender onChange={onFilterGender}/>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export default Filter;