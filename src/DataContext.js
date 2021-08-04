import React from "react";

export const DataContext = React.createContext({
    dataList: window.localStorage.getItem("dataList") || [],
    setDataList: () => {},
});

