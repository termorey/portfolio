import React from "react";
import {Routes, Route} from "react-router-dom";
import Index from "./index";
import Menu from "../components/menu/menu";

const Body = () => {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path={"*"} element={<Index/>}/>
            </Routes>
        </>
    );
}

export default Body