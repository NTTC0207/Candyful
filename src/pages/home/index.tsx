import React, { useEffect, useRef, useState } from 'react';
import { HomeWrap } from './style'
import { gsap, Power2 } from 'gsap'
import CssRulePlugin from 'gsap/CSSRulePlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Row, Col } from 'antd'
import { ShoppingOutlined } from '@ant-design/icons';
import 'hover.css'
import * as actionCreators from '../Login/store/actionCreators'
import {useDispatch,useSelector} from 'react-redux'
import Wall from './component/Wall'
import Testi from './component/Testimonial'


const Home = () => {
    const dispatch = useDispatch();
    const load = useSelector((state: any) => state.login.load)
   

    gsap.registerPlugin(CSSRule, CssRulePlugin, ScrollTrigger);
    let container = useRef(null)
    let img1 = useRef(null)
    let img2 = useRef(null)
    let img3 = useRef(null)
    let i1 = useRef(null)
    let i2 = useRef(null)
    let i3 = useRef(null)
    let banner = useRef(null)
    let logo = useRef(null)
    let ImageReveal = CssRulePlugin.getRule(".banner-wrapper:after")
    let slogan = useRef(null)
    let t1 = gsap.timeline()
    let t2 = gsap.timeline()

    //scroll panel 

    const panels: any = useRef([])
    const panelsContainer: any = useRef();

    const createPanelsRefs = (panel: any, index: number) => {
        panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;

        gsap.to(panels.current, {
            xPercent: -58 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);

    useEffect(() => {

if(load === false){
    t1.to(i1.current, { duration: 0.5, css: { display: "block" } })
    .to(img1.current, { duration: 0.5, css: { display: "none" }, delay: -0.5 })
    .to(i2.current, { duration: 0.5, css: { display: "block" } })
    .to(img2.current, { duration: 0.5, css: { display: "none" }, delay: -0.5 })
    .to(i3.current, { duration: 0.5, css: { display: "block" } })
    .to(img3.current, { duration: 0.5, css: { display: "none" }, delay: -0.5 })
    .to(ImageReveal, { duration: 1, width: "0%", ease: Power2.easeInOut })
    .to(logo.current, { duration: 2, scale: 1.2, ease: Power2.easeInOut, delay: -1 })
    .to(banner.current, { duration: 2, ease: Power2.easeInOut, scale: 1.1, delay: -2 })
    .to(slogan.current, { duration: .5, ease: Power2.easeInOut, css: { transform: "translateY(0%)" }, delay: -0.5 })

    dispatch(actionCreators.setLoad(true))

}

if(load === true){
    t2.to(ImageReveal, { duration: 1, width: "0%", ease: Power2.easeInOut })
    .to(logo.current, { duration: 2, scale: 1.2, ease: Power2.easeInOut, delay: -1 })
    .to(banner.current, { duration: 2, ease: Power2.easeInOut, scale: 1.1, delay: -2 })
    .to(slogan.current, { duration: .5, ease: Power2.easeInOut, css: { transform: "translateY(0%)" }, delay: -0.5 })

}

    }, [])


    useEffect(() => {
        return () => {
            gsap.to(ImageReveal, { duration: 0, width: "100%", ease: Power2.easeInOut })
        }
    })

    return (
        <>
            <HomeWrap ref={container}>

                {/* banner section */}
                <section style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h1 className="Logo" ref={logo}>Candyful</h1>
                    <div style={{ position: 'absolute', width: "100%", height: "100vh" }}>
                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: "100vh" }}>

                            <p className="slogan"><span ref={slogan}>Sweetness, Your Way!</span></p>

                        </div>
                    </div>

                    <div className="banner-wrapper">
                        <img className="Banner-img" ref={banner} src="https://images.pexels.com/photos/6708894/pexels-photo-6708894.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" alt="banner" />
                    </div>


                    <div className="show-1">

                        <div className="image1" ref={img1} >
                            <img alt="image12" ref={i1} style={{display:'none'}} src="https://images.pexels.com/photos/3607029/pexels-photo-3607029.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>

                        <div className="image2" ref={img2} >
                            <img alt="image21" ref={i2} style={{display:'none'}} src="https://images.pexels.com/photos/4202963/pexels-photo-4202963.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>

                        <div className="image3" ref={img3}>
                            <img alt="image32" ref={i3} style={{display:'none'}} src="https://images.pexels.com/photos/4016507/pexels-photo-4016507.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>

                    </div>
                </section>


                {/* //website intro */}
                {/* <section className="h-p-section" style={{ width: "100%", height: "100vh" }} >
                    <Wall />
                </section> */}

          

              

                {/* product scroll */}
                <section className="h-p-section" style={{ width: "100%", height: "100vh" }} ref={panelsContainer}>
                    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
                        <div className="h-p-scroll" style={{ display: "flex", marginTop: "80px" }}>



                            <div ref={(e) => createPanelsRefs(e, 0)} className="h-p-panel"> <div className="hvr-bob"> <ShoppingOutlined className="hvr-pop" style={{ fontSize: "1rem" }} /></div><img alt="Product" src="https://images.pexels.com/photos/1578293/pexels-photo-1578293.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" /></div>

                            <div ref={(e) => createPanelsRefs(e, 1)} className="h-p-panel"> <div className="hvr-bob"> <ShoppingOutlined className="hvr-pop" style={{ fontSize: "1rem" }} /></div><img alt="Product1" src="https://images.pexels.com/photos/6798399/pexels-photo-6798399.jpeg?auto=compress&cs=tinysrgb&w=600" /></div>

                            <div ref={(e) => createPanelsRefs(e, 2)} className="h-p-panel"> <div className="hvr-bob"> <ShoppingOutlined className="hvr-pop" style={{ fontSize: "1rem" }} /></div><img alt="Product2" src="https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" /></div>

                            <div ref={(e) => createPanelsRefs(e, 3)} className="h-p-panel"> <div className="hvr-bob"> <ShoppingOutlined className="hvr-pop" style={{ fontSize: "1rem" }} /></div><img alt="Product3" src="https://images.pexels.com/photos/1375808/pexels-photo-1375808.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" /></div>

                            <div ref={(e) => createPanelsRefs(e, 4)} className="h-p-panel"> <div className="hvr-bob"> <ShoppingOutlined className="hvr-pop" style={{ fontSize: "1rem" }} /></div><img alt="Product4" src="https://images.pexels.com/photos/89731/pexels-photo-89731.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" /></div>

                            <div ref={(e) => createPanelsRefs(e, 5)} className="h-p-panel"> <div className="hvr-bob"> <ShoppingOutlined className="hvr-pop" style={{ fontSize: "1rem" }} /></div><img alt="Product5" src="https://images.pexels.com/photos/1236662/pexels-photo-1236662.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" /></div>

                            <div ref={(e) => createPanelsRefs(e, 6)} className="h-p-panel"> <div className="hvr-bob"> <ShoppingOutlined className="hvr-pop" style={{ fontSize: "1rem" }} /></div><img alt="Product6" src="https://images.pexels.com/photos/1296170/pexels-photo-1296170.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" /></div>

                        </div>

                    </div>
                </section>


  {/* customer Review */}
            
                   
                        {/* <div style={{ width: "80%", background: "white", padding: "40px", boxShadow: "0px 1px 3px 3px rgba(0,0,0,0.1)", overflow: "hidden" }}>
                            <Row>
                                <Col lg={8}>
                                    <div style={{ background: "red" }}>
                                        src
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div style={{ background: "red" }}>
                                        src
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div style={{ background: "red" }}>
                                        src
                                    </div>
                                </Col>

                            </Row>



                        </div> */}
                        {/* <Testi /> */}
                    
            





            </HomeWrap>
        </>
    )

}

export default Home;