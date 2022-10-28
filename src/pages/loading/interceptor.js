import React, { useEffect, useState } from 'react';
import candy from '../../static/images/candyFulf.png'
import { Bounce, Slide } from 'react-reveal'
import CountUp from 'react-countup';

const Inter = () => {
    const [count, setCount] = useState(true)

    useEffect(() => {
        setInterval(() => setCount(false), 2100)
    }, [])

    return (
        <>

            <div style={{ width: "100vw", height: "100vh", top: "0%" ,position:"fixed",background:"#FA7070",zIndex:"123123123"}}>
                <div style={{ color: "white", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "90vh" }}>
                    <Bounce top delay={1000}>
                        <img src={candy} className="loaderLogo" alt="logo" />
                    </Bounce>
                    <div className="progressl"><div className="barl" style={{ background: "white" }}></div></div>
                    <div><CountUp duration={2} start={0} end={100} />%</div>
                    <div>Refreshing Token....</div>
                </div>
            </div>

        </>

    )

}

export default Inter;