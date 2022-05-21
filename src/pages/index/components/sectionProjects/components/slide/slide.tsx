import React, {BaseHTMLAttributes, useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import localStyle from "./style.module.scss";
import Block from "../../../../../../components/block/block";
import {multiClass} from "../../../../../../utils/utils";
import { animated } from "react-spring";
import Carousel from "../carousel/carousel";

interface PropsType extends BaseHTMLAttributes<any> {
    transitionStyle: object;
    loading: boolean;
    data: {
        title: string;
        images?: string[];
        video?: string;
        body: string;
    };
}

const Slide = ({data, transitionStyle, loading, className, ...props} : PropsType) => {
    const [last, setLast] = useState<string|null>(null)
    const [body, setBody] = useState<string>()
    useEffect(() => {
        if (data.body!==last) {
            const newBody = require("../../data/" + data.body)
            fetch(newBody).then((result) => result.text())
                .then((text) => {
                    setBody(text)
                    setLast(data.body)
                }).catch(e => {
                console.error('Невозможно прочесть файл', e)
            })
        }
    }, [data])

    return (
        <Block className={multiClass(className!, localStyle.slide)} {...props}>
            {(data.images || data.video) &&
            <animated.div className={multiClass(localStyle.slider, "bordered")} style={{...transitionStyle}}>
                {!loading &&
                <>
                    {data.images?.length ?
                        <Carousel data={data.images}/>
                        : data.video ?
                                <iframe width="100%" height="100%" src={data.video}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            :
                            <></>
                    }
                </>
                }
            </animated.div>
            }
            <animated.div className={multiClass(localStyle.information, "bordered backdropBlur")} style={{...transitionStyle}}>
                {!loading &&
                    <>
                        <h2 className={localStyle.title}>{data.title}</h2>
                        <div className={localStyle.body}><ReactMarkdown>{body!}</ReactMarkdown></div>
                    </>
                }
            </animated.div>
        </Block>
    )
}

export default Slide;