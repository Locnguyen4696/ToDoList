import styled from "styled-components";
import React from "react";

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    min-height: 45px;
`;
function Input(props) {
    return (
        <StyledInput
            onChange={(e) => {
                props.type === "date"
                    ? props.setDate(e.target.value)
                    : props.setTitle(e.target.value);
            }}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            min={props.min}
        />
    );
}
export default Input;
