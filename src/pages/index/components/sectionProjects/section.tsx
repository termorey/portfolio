import React, {useEffect, useState} from "react";
import style from "./style.module.scss";
import Slide from "./components/slide/slide";
import { Transition, config } from "react-spring";

const SectionProjects = () => {
    const [show, setToggle] = useState(true);
    const [temp, setTemp] = useState(0)
    const payloadData : {title:string; images:string[]; body:string;}[] = require("./data/information.json");
    const [dataCount, setCounter] = useState(0);
    const [data, setData] = useState(payloadData[dataCount]);

    const changePage = (i: number) => {
        if (i === dataCount) return
        setToggle(false)
        setCounter(i)
    }

    useEffect(() => { setData(payloadData[dataCount]) }, [dataCount])

    return (
        <section className={style.projectsSection}>
            <Transition
                items={show}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                reverse={show}
                // delay={200}
                config={config.slow}
                onRest={() => setToggle(true)}
            >
                {(styles, item) =>
                    item && <Slide data={data} loading={!show} transitionStyle={styles}/>
                }
            </Transition>
            <div className={style.more}>
                <span className={style.title}>Больше</span>
                <div className={style.pagination}>
                    {payloadData.map((data, i) =>
                        <span key={data.body} className={(i===dataCount) ? style.active : ""} onClick={() => changePage(i)} title={data.title}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default SectionProjects;