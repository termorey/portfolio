import React from "react";
import {Routes, Route} from "react-router-dom";
import Index from "./index";
import Menu from "../components/menu/menu";
import NotFound from "./404/404";

const Body = () => {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path={"/"} element={<Index/>} />
                <Route path={"*"} element={<NotFound/>} />
            </Routes>
        </>
    );
}

export default Body