import React, {BaseHTMLAttributes, useRef} from "react";
import localStyle from "./style.module.scss";
import {multiClass} from "../../../../../../utils/utils";

interface PropsType extends BaseHTMLAttributes<any> {
    data: string[]
}

const Carousel = ({data, style, className} : PropsType) => {
    const gallery = useRef<HTMLDivElement|null>(null)
    const handlerMouseEnter = () => {
        if (gallery.current!==null && gallery.current.scrollWidth > gallery.current.offsetWidth) {
            const x = window.scrollX;
            const y = window.scrollY;
            window.onscroll = () => window.scrollTo(x, y);
        }
    };
    const handlerWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        const scroll = event.currentTarget.scrollLeft + (event.deltaY/Math.abs(event.deltaY))*event.currentTarget.offsetWidth;
        if (scroll > event.currentTarget.scrollWidth) {
            event.currentTarget.scrollLeft = event.currentTarget.scrollWidth;
        } else if (scroll < 0) {
            event.currentTarget.scrollLeft = 0;
        } else {
            event.currentTarget.scrollLeft = scroll;
        }
    }
    const handlerMouseLeave = () => window.onscroll = () => {}

    return (
        <div className={multiClass(localStyle.carousel, className)} style={{...style}}
             ref={gallery}
             onMouseEnter={handlerMouseEnter}
             onWheel={handlerWheel}
             onMouseLeave={handlerMouseLeave}
        >
            {data.map(image =>
                <div className={localStyle.item} key={image}>
                    <div className={localStyle.image} style={{backgroundImage: `url("${process.env.PUBLIC_URL}${image}")`}}/>
                    <div className={localStyle.controls}>
                        <a href={`${process.env.PUBLIC_URL}${image}`} target={"_blank"} className={"btn light"}
                           title={"Открыть в новой вкладке"}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H9C9.26522 20 9.51957 19.8946 9.70711 19.7071C9.89464 19.5196 10 19.2652 10 19V11C10 10.7348 9.89464 10.4804 9.70711 10.2929C9.51957 10.1054 9.26522 10 9 10ZM8 18H2V12H8V18ZM19.92 0.62C19.8185 0.375651 19.6243 0.181475 19.38 0.0799999C19.2598 0.028759 19.1307 0.00157999 19 0H13C12.7348 0 12.4804 0.105357 12.2929 0.292893C12.1054 0.48043 12 0.734784 12 1C12 1.26522 12.1054 1.51957 12.2929 1.70711C12.4804 1.89464 12.7348 2 13 2H16.59L11.29 7.29C11.1963 7.38296 11.1219 7.49356 11.0711 7.61542C11.0203 7.73728 10.9942 7.86799 10.9942 8C10.9942 8.13201 11.0203 8.26272 11.0711 8.38458C11.1219 8.50644 11.1963 8.61704 11.29 8.71C11.383 8.80373 11.4936 8.87812 11.6154 8.92889C11.7373 8.97966 11.868 9.0058 12 9.0058C12.132 9.0058 12.2627 8.97966 12.3846 8.92889C12.5064 8.87812 12.617 8.80373 12.71 8.71L18 3.41V7C18 7.26522 18.1054 7.51957 18.2929 7.70711C18.4804 7.89464 18.7348 8 19 8C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7V1C19.9984 0.869323 19.9712 0.740222 19.92 0.62Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Carousel;