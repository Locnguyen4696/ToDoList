import React, { useContext, useState } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { DataContext } from "../../DataContext";
const Container = styled.div`
    padding: 0 25px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;
const Item = styled.div`
    select {
        width: 100%;
        padding: 10px;
    }
`;
const Button = styled.button`
    width: 100%;
    background-color: #5cb85c;
    border-radius: 5px;
    box-shadow: none;
    border: none;
    color: #fff;
    padding: 10px;
    margin-top: 30px;
    cursor: pointer;
`;
function TaskForm(props) {
    const { dataList, setDataList } = useContext(DataContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("Normal");
    const { item } = props;
    return (
        <Container>
            <Input
                placeholder={
                    props.type === "add" ? "Add new task..." : item.title
                }
                setTitle={setTitle}
                value={title}
            />
            <Heading scale="MD">Description</Heading>
            <TextArea
                placeholder={props.type === "add" ? " " : item.description}
                setDescription={setDescription}
                value={description}
            />
            <Grid>
                <Item>
                    <Heading scale="MD">Due Date</Heading>
                    <Input
                        type="date"
                        setDate={setDate}
                        value={
                            props.type === "add"
                                ? date
                                : date
                                ? date
                                : item.date
                        }
                    />
                </Item>
                <Item>
                    <Heading scale="MD">Priority</Heading>
                    <select
                        style={{ minHeight: "45px" }}
                        onChange={(e) => {
                            setPriority(e.target.value);
                        }}
                        value={props.type === "add" ? priority : item.priority}
                    >
                        <option value="High">High</option>
                        <option value="Normal">Normal</option>
                        <option value="Low">Low</option>
                    </select>
                </Item>
            </Grid>
            <Button
                onClick={() => {
                    if (props.type === "add") {
                        if (title && description && date && priority) {
                            setDataList([
                                ...dataList,
                                {
                                    id: Date.now(),
                                    title: title,
                                    description: description,
                                    date: date,
                                    priority: priority,
                                },
                            ]);
                            setTitle("");
                            setDescription("");
                            setDate("");
                            setPriority("Normal");
                        }
                    } else {
                        for (let i in dataList) {
                            if (dataList[i].id === item.id) {
                                dataList[i].title = title || dataList[i].title;
                                dataList[i].description =
                                    description || dataList[i].description;
                                dataList[i].date = date || dataList[i].date;
                                dataList[i].priority =
                                    priority || dataList[i].priority;
                                setDataList([...dataList]);
                            }
                        }
                    }
                }}
            >
                {props.type === "add" ? "Add" : "Update"}
            </Button>
        </Container>
    );
}

export default TaskForm;
