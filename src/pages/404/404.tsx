import React from "react";
import style from "./style.module.scss";
import Block from "../../components/block/block";
import {Link} from "react-router-dom";
import {multiClass} from "../../utils/utils";

const NotFound = () => {
    return (
        <main className={style.notFoundPage}>
            <Block className={multiClass(style.notFoundBlock, "background padding bordered backdropBlur")}>
                <span>Страница не найдена</span>
                <Link to={"/"}>Вернуться на главную</Link>
            </Block>
        </main>
    )
}

export default NotFound;