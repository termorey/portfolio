import React from "react";
import style from "./style.module.scss"
import SectionWelcome from "./components/sectionWelcome/section";
import SectionProjects from "./components/sectionProjects/section";

const Index = () => {
    return (
        <main className={style.index}>
            <SectionWelcome/>
            <SectionProjects/>
        </main>
    )
}

export default Index