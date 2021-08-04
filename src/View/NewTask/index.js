import styled from "styled-components";
import Heading from "../../components/Heading";
import TaskForm from "../../components/TaskForm";

const Container = styled.div`
    padding: 0 25px;
`;

function NewTask() {
    return (
        <Container>
            <Heading scale="LG">New Task</Heading>
            <TaskForm type="add"></TaskForm>
        </Container>
    );
}

export default NewTask;
