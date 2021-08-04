import styled from "styled-components";

const Heading = styled.div`
    padding: ${({ scale }) => (scale === "MD" ? "10px 0" : "25px 0")};
    text-align: ${({ scale }) => (scale === "MD" ? "left" : "center")};
    font-size: ${({ scale }) => (scale === "MD" ? "1.2rem" : "2rem")};
    font-weight: bold;
    margin-bottom: ${({ scale }) => (scale === "MD" ? "0" : "50px")};
`;

export default Heading;
