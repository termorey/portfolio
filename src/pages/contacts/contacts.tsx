import React from "react";
import Icon from "../../components/icons/icon";
import style from "./style.module.scss";
import Block from "../../components/block/block";
import {multiClass} from "../../utils/utils";
import Main from "../../components/main/main";
import Link from "../../components/link/link";

const Contacts = () => {
    return (
        <Main className={style.contactsPage} fullscreen={true}>
            <Block className={multiClass(style.contactsBlock, "padding backdropBlur bordered")}>
                <h2>Контакты</h2>
                <div className={style.list}>
                    <Link href={"https://github.com/termorey"} target={"_blank"} rel={"noopener"} title={"Github"}><Icon.github size={"1.5rem"}/> Github <Icon.link size={"1rem"}/></Link>
                    <Link href={"https://vk.com/xxxwhiteshadowxxx"} target={"_blank"} rel={"noopener"} title={"VK"}><Icon.vk size={"1.5rem"}/> VK <Icon.link size={"1rem"}/></Link>
                    <Link href={"https://kolomna.hh.ru/resume/6b704cecff0adfb6490039ed1f39507a704759"} target={"_blank"} rel={"noopener"} title={"HH.ru"}>HH <Icon.link size={"1rem"}/></Link>
                </div>
            </Block>
        </Main>
    )
}

export default Contacts;