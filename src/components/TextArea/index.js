import styled from "styled-components";

const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 5px;
    resize: vertical;
    margin-bottom: 10px;
`;
function TextArea(props) {
    return (
        <StyledTextArea
            onChange={(e) => {
                props.setDescription(e.target.value);
            }}
            placeholder={props.placeholder}
            value={props.value}
        />
    );
}
export default TextArea;
