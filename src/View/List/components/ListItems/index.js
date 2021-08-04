import styled from "styled-components";
import React, { useContext, useState } from "react";
import { DataContext } from "../../../../DataContext";
import TaskForm from "../../../../components/TaskForm";

const Item = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    input {
    }
    p {
        width: 50%;
    }
    button {
        width: 100px;
        box-shadow: none;
        border: none;
        padding: 10px;
        cursor: pointer;
    }
`;

function ListItem(props) {
    const { dataList, setDataList } = useContext(DataContext);
    const [detail, toggleDetail] = useState(false);

    const { item } = props;
    return (
        <>
            <Item>
                <input
                    type="checkbox"
                    onChange={(e) => {
                        if (e.target.checked) {
                            props.setSelectedList([
                                ...props.selectedList,
                                item.id,
                            ]);
                        } else {
                            for (let i in props.selectedList) {
                                if (props.selectedList[i] === item.id) {
                                    props.selectedList.splice(i, 1);
                                    props.setSelectedList([
                                        ...props.selectedList,
                                    ]);
                                }
                            }
                        }
                    }}
                ></input>
                <p>{item.title}</p>
                <button
                    onClick={() =>
                        detail ? toggleDetail(false) : toggleDetail(true)
                    }
                >
                    Detail
                </button>
                <button
                    onClick={() => {
                        for (let i in dataList) {
                            if (dataList[i].id === item.id) {
                                dataList.splice(i, 1);
                                setDataList([...dataList]);
                            }
                        }
                    }}
                >
                    Remove
                </button>
            </Item>
            {detail && <TaskForm item={item}></TaskForm>}
        </>
    );
}
export default ListItem;
