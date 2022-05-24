import React, {useRef, useState} from "react";
import style from "./style.module.scss"
import {multiClass} from "../../../../utils/utils";
import {animated, useSpring} from "react-spring";

const SectionWelcome = () => {
    const blockRef = useRef<HTMLDivElement|null>(null)
    const [xyz, set] = useState<Array<number>>([0,0,1])
    const calc = (x:number, y:number, scale:number=1) => {
        const rect = blockRef.current?.getBoundingClientRect()
        if (rect) {
            const deg = 10;
            const calcX = -(y - rect.top - rect.height / 2) / (window.innerHeight*.5) * deg;
            const calcY = (x - rect.left - rect.width / 2) / (window.innerWidth*.5) * deg;
            return [Math.abs(calcX)>deg ? deg*(calcX/Math.abs(calcX)) : calcX, Math.abs(calcY)>deg ? deg*(calcY/Math.abs(calcY)) : calcY, scale]
        } else {
            return [0, 0, scale]
        }
    }
    const transform = (x:number, y:number, scale:number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`;
    const transformInverse = (x:number, y:number, scale:number) => `perspective(600px) rotateX(${-x}deg) rotateY(${-y}deg) scale(${scale})`;
    const shadow = (x:number, y:number, scale:number) => `drop-shadow(${-y}px ${x}px ${Math.sqrt(x*x + y*y)}px var(--color-dark-light)`;
    const spring = useSpring({xyz, config: { mass: 1, tension: 280, friction: 120 }})

    return (
        <section className={style.welcomeSection}>
            <animated.div className={multiClass("bordered padding backdropBlur blockContainer", style.container)}
                          style={{transform: spring.xyz.to(transform)}}
                   ref={blockRef}
                          onMouseLeave={() => set([0, 0, 1])}
                          onMouseMove={(e) => {
                              set(calc(e.clientX, e.clientY, 1.05))
                          }}
            >
                <animated.img className={style.logo} src={"/style/images/logo.png"}
                     alt={"logo"}
                     draggable={"false"}
                     style={{
                         transform: spring.xyz.to(transformInverse),
                         filter: spring.xyz.to(shadow)
                     }}
                />
                <h2 className={style.text}>small things are important</h2>
            </animated.div>
        </section>
    )
}

export default SectionWelcome;