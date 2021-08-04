import React, { useEffect, useState } from "react";
import styled from "styled-components";
import List from "./View/List";
import NewTask from "./View/NewTask";
import { DataContext } from "./DataContext";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
    width: 100vw;
    * {
        box-sizing: border-box;
    }
`;

function App() {
    var oldData = JSON.parse(localStorage.getItem("dataList")) || [];
    const [dataList, setDataList] = useState(oldData);
    const value = { dataList, setDataList };
    useEffect(() => {
        localStorage.setItem("dataList", JSON.stringify(dataList));
    }, [dataList]);
    return (
        <DataContext.Provider value={value}>
            <Wrapper>
                <NewTask></NewTask>
                <List></List>
            </Wrapper>
        </DataContext.Provider>
    );
}

export default App;
