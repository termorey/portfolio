import React from "react";
import localStyle from "./style.module.scss";
import {multiClass} from "../../utils/utils";

interface PropsType extends React.LinkHTMLAttributes<any> {
    target?: string;
}

const Link = ({children, className, ...props} : PropsType) => {
    return (
        <a className={multiClass(localStyle.link, className)} {...props}>
            {children}
        </a>
    )
}

export default Link;