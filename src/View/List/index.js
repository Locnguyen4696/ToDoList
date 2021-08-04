import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";

import Heading from "../../components/Heading";
import ListItem from "./components/ListItems";
import { DataContext } from "../../DataContext";
import BulkAction from "./components/BulkAction";

const Container = styled.div`
    padding: 0 25px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    min-height: 45px;
`;

function List() {
    const { dataList, setDataList } = useContext(DataContext);
    const [search, setSearch] = useState("");
    const [selectedList, setSelectedList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        let list = [];
        if (search) {
            setFilteredList([]);
            dataList.forEach((item) => {
                if (item.title.includes(search)) {
                    list.push(item);
                }
            });
            setFilteredList(list);
        } else {
            setFilteredList(dataList);
        }
    }, [search, dataList]);
    // useEffect(() => {
    //     console.log(selectedList);
    // }, [selectedList]);
    return (
        <Container>
            <Heading scale="LG">To Do List</Heading>
            <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            {filteredList &&
                filteredList.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            item={item}
                            setSelectedList={setSelectedList}
                            selectedList={selectedList}
                        ></ListItem>
                    );
                })}
            {selectedList.length > 0 && (
                <BulkAction
                    selectedList={selectedList}
                    dataList={dataList}
                    setDataList={setDataList}
                ></BulkAction>
            )}
        </Container>
    );
}

export default List;
