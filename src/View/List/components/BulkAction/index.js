import styled from "styled-components";
import Heading from "../../../../components/Heading";
const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: calc(60% - 50px);
    background-color: #e0e0e0;
    border: 1px solid #c0c0c0;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 10%;
`;

function BulkAction(props) {
    return (
        <Wrapper>
            <Heading scale="MD" style={{ width: "75%" }}>
                Bulk Action:
            </Heading>
            <Button>Done</Button>
            <Button
                onClick={() => {
                    for (let i in props.selectedList) {
                        for (let j in props.dataList) {
                            if (
                                props.dataList[j].id === props.selectedList[i]
                            ) {
                                props.dataList.splice(j, 1);
                                props.setDataList([...props.dataList]);
                            }
                        }
                    }
                }}
            >
                Remove
            </Button>
        </Wrapper>
    );
}

export default BulkAction;
