import React, {HTMLProps} from "react";
import {multiClass} from "../../utils/utils";
import localStyle from "./style.module.scss";

interface PropsType extends React.PropsWithChildren<any>, HTMLProps<any>{
    className?: string;
    style?: object;
}

const Block = ({className, style, children} : PropsType) => {
    return (
        <div className={multiClass(localStyle.block, className)} style={{...style}}>
            {children}
        </div>
    )
}

export default Block