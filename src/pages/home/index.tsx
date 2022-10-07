import React, { useEffect, useRef } from 'react';
import { HomeWrap } from './style'
import { gsap, Power2 } from 'gsap'
import CssRulePlugin from 'gsap/CSSRulePlugin'
import { Grid, Row, Col } from 'antd'

const Home: React.FC = () => {

    gsap.registerPlugin(CSSRule, CssRulePlugin);
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

    useEffect(() => {
          t1.to(img1.current, { duration: 0.5, css: { display: "block" } })
            .to(i1.current, { duration: 0.5, css: { display: "none" }, delay: -0.5 })
            .to(img2.current, { duration: 0.5, css: { display: "block" } })
            .to(i2.current, { duration: 0.5, css: { display: "none" }, delay: -0.5 })
            .to(img3.current, { duration: 0.5, css: { display: "block" } })
            .to(i3.current, { duration: 0.5, css: { display: "none" }, delay: -0.5 })
            .to(ImageReveal, { duration: 1, width: "0%", ease: Power2.easeInOut })
            .to(logo.current, { duration: 2, scale: 1.2, ease: Power2.easeInOut, delay: -1 })
            .to(banner.current, { duration: 2, ease: Power2.easeInOut, scale: 1.1, delay: -2 })
            .to(slogan.current, { duration: .5, ease: Power2.easeInOut, css: { transform: "translateY(0%)" }, delay: -0.5 })

          

    },[])


    useEffect(()=>{
  return () => {
              gsap.to(ImageReveal, { duration: 0, width: "100%", ease: Power2.easeInOut })
            }
    })

    return (
        <>
            <HomeWrap ref={container}>

                <section style={{ width: "100%", height: "100vh",display:"flex",justifyContent: "center",alignItems:"center"}}>
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
                            <img alt="image12" ref={i1} src="https://images.pexels.com/photos/3607029/pexels-photo-3607029.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>

                        <div className="image2" ref={img2} >
                            <img alt="image21" ref={i2} src="https://images.pexels.com/photos/4202963/pexels-photo-4202963.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>

                        <div className="image3" ref={img3}>
                            <img alt="image32" ref={i3} src="https://images.pexels.com/photos/4016507/pexels-photo-4016507.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>

                    </div>
                </section>


                <section style={{width:"100%",height:"100vh"}} >

                asd
                </section>





            </HomeWrap>
        </>
    )

}

export default Home;