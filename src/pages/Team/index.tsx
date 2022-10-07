import React from 'react';
import { Avatar, Row, Col } from 'antd'
const Fade = require("react-reveal/Fade")

const colPo = {

    width: "100%",
    textAlign: 'center' as const
}


const Team: React.FC = () => {
    return (
        <>
            <div style={{ height: "100%", width: "100vw" }}>
                <div className="p-title">
                    <h1>Meet the Team</h1>
                </div>

                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "100px" }}>
                    <div style={{ width: "80%", background: "white", padding: "40px", boxShadow: "0px 1px 3px 3px rgba(0,0,0,0.1)", overflow: "hidden" }}>
                        <div >
                            <Row  >

                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <Fade left>
                                        <div className="t-card" style={colPo}>
                                            <Avatar className="t-avatar" size={128} src="https://i03piccdn.sogoucdn.com/2de9963f8009168b" />
                                            <h2>Chee Hao Yang</h2>
                                            <p>Front-End Developer</p>
                                        </div>
                                    </Fade>
                                </Col>

                                <Col lg={8} md={12} sm={24} xs={24} >
                                    <Fade bottom delay={250}>
                                        <div className="t-card" style={colPo}>
                                            <Avatar className="t-avatar" size={128} src="https://www.yualexius.com/wp-content/uploads/2021/05/Zhang-Chulan-chinese-anime-male-character.png?ezimgfmt=rs:371x208/rscb42/ngcb42/notWebP" />
                                            <h2>Daniel Lim</h2>
                                            <p> Back-End Developer </p>
                                        </div>
                                    </Fade>
                                </Col>



                                <Col lg={8} md={24} sm={24} xs={24} >
                                    <Fade right delay={500}>
                                        <div className="t-card" style={colPo}>
                                            <Avatar className="t-avatar" size={128} src="https://i.pinimg.com/222x/8d/4f/44/8d4f442214edc01230b38228bad5226f.jpg" />
                                            <h2>Peng Siew Hui</h2>
                                            <p> Database Architect</p>
                                        </div>
                                    </Fade>
                                </Col>

                            </Row>

                        </div>
                    </div>
                </div>





            </div>
        </>
    )
}

export default Team;