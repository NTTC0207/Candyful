import React, { useEffect, useState } from 'react';
import candy from '../../static/images/candyFulf.png'
import {Bounce,Slide} from 'react-reveal'
import CountUp from 'react-countup';

const Loading = () => {
    const [count, setCount] = useState(true)

    useEffect(() => {
        setInterval(() => setCount(false), 2100)
    }, [])

    return (
        <>
            <Slide left opposite when={count} >
                <div style={{ width: "100vw", height: "90vh", top: "10%" }}>
                    <div style={{ color: "white", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "90vh" }}>
                        <Bounce top delay={1000}>
                            <img src={candy} className="loaderLogo" alt="logo" />
                        </Bounce>
                        <div className="progressl"><div className="barl" style={{ background: "white" }}></div></div>
                        <div><CountUp duration={2} start={0} end={100} />%</div>
                       
                    </div>
                </div>
            </Slide>
        </>

    )

}

export default Loading;