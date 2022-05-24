import React from "react";
import {Routes, Route} from "react-router-dom";
import Index from "./index";
import Menu from "../components/menu/menu";
import NotFound from "./404/404";
import Contacts from "./contacts/contacts";

const Body = () => {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path={"/"}>
                    <Route path={""} element={<Index/>} />
                    <Route path={"contacts"} element={<Contacts/>} />
                    <Route path={"*"} element={<NotFound/>} />
                </Route>
                <Route path={"*"} element={<NotFound/>} />
            </Routes>
        </>
    );
}

export default Body