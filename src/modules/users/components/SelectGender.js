import React from "react";
import Select from "../../../components/Select";
import styled from "styled-components";

const SelectGender = ({onChange}) => {
    const [gender, setGender] = React.useState('');

    const handleChangeGender = (events) => {
        const value = events.target.value;
        setGender(value);
        if (onChange) {
            onChange(value);
        }
    }

    return (
        <Wrapper>
            <Select name="gender" onChange={handleChangeGender} value={gender}>
                <option value="">-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Select>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
  flex-basis: 200px;
`

export default SelectGender;