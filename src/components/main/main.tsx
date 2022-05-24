import React from "react";
import localStyle from "./style.module.scss";
import {multiClass} from "../../utils/utils";

interface PropsType extends React.PropsWithChildren<any>{
    fullscreen?: boolean;
}

const Main = ({fullscreen, children, className, ...props} : PropsType) => {
    return (
        <main
            className={multiClass(
                localStyle.main,
                fullscreen && localStyle.fullscreen,
                className
            )}
              {...props}>
            {children}
        </main>
    )
}

export default Main