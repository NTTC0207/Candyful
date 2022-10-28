import React,{useEffect,useState,useRef,CSSProperties} from 'react';
import CssRulePlugin from 'gsap/CSSRulePlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Row, Col } from 'antd'
import { gsap, Power2 } from 'gsap'




const Wall: React.FC = () => {

    let [hover ,setHover]=useState(false)

    useEffect(() => {


        window.addEventListener('scroll', handlescroll)
    
      }, [])
    

    

    gsap.registerPlugin(CssRulePlugin,CSSRule,ScrollTrigger)
    let container = useRef<HTMLDivElement>(null)
    let wall1 = useRef<HTMLDivElement>(null)
    let wall2 = useRef<HTMLDivElement>(null)
    let wall3 = useRef<HTMLDivElement>(null)
    let t1 =gsap.timeline()


    const wall:CSSProperties ={
     
        position: "relative",
        transition: "1s",
    }

    const hwall:CSSProperties ={
   
        position: "relative",
        transition: "1s",
    }


    const handlescroll=()=>{
    
        if(window.scrollY >300){
          t1.to(container.current,{ scrollTrigger:{trigger:container.current,pin:container.current,start:"top top",toggleActions:"reverse pause restart pause",end:"+=100"}})
          .to(wall3.current,{width:"95%",duration:1,ease: Power2.easeInOut})
          .to(wall2.current,{width:"95%",duration:1,ease: Power2.easeInOut})
          .to(wall1.current,{width:"95%",duration:1,ease: Power2.easeInOut})
        }else{
      
        }
      }

    const handleLeave=()=>{
   
      gsap.to(wall1.current,{duration:1,ease:Power2.easeInOut})
      gsap.to(wall2.current,{duration:1,ease:Power2.easeInOut})
      gsap.to(wall3.current,{duration:1,ease:Power2.easeInOut})
    }
    


    
    return (
        <>
            <div className="WallWrapper" ref={container}>
                <div className="Wall1"  style={hover === true ? hwall:wall} ref={wall1}>
                    <div className="h-wholeWrapper">

                        <div className="h-imgwrapper">
                            <img src="https://images.pexels.com/photos/12466760/pexels-photo-12466760.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>


                        <div className="h-textwrapper">
                            <div className="h-t-1">00-1</div>
                            <div className="h-t-2">Free Delivery</div>
                        </div>

                    </div>
                </div>
                <div className="Wall2"   style={hover === true ? hwall:wall} ref={wall2}>
                    <div className="h-wholeWrapper">

                        <div className="h-imgwrapper">
                            <img src="https://images.pexels.com/photos/6144099/pexels-photo-6144099.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>


                        <div className="h-textwrapper">
                            <div className="h-t-1">00-1</div>
                            <div className="h-t-2">Free Delivery</div>
                        </div>

                    </div>
                </div>
                <div className="Wall3"   style={hover === true ? hwall:wall} ref={wall3}>
                    <div className="h-wholeWrapper">

                        <div className="h-imgwrapper">
                            <img src="https://images.pexels.com/photos/6450489/pexels-photo-6450489.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                        </div>


                        <div className="h-textwrapper">
                            <div className="h-t-1">00-1zds</div>
                            <div className="h-t-2">Free Delivery</div>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Wall;