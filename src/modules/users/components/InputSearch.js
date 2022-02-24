import React from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/Input";
import styled from "styled-components";

const InputSearch = ({onChange}) => {
    const [search, setSearch] = React.useState('');

    const handleChangeInput = (events) => {
        const value = events.target.value;
        setSearch(value)
        if (onChange) {
            onChange(value);
        }
    }

    return (
        <Wrapper>
            <Input placeholder="Search..." type="text" onChange={handleChangeInput} value={search}/>
            <Button onClick={handleChangeInput}>Reset</Button>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
  display: flex;
  gap: 8px;
`

export default InputSearch;