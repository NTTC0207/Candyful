import React, { useState,useEffect } from 'react';
import { NavWrapper } from './style'
import hover1 from '../static/hover.mp3'
import candyFul from '../static/images/candyFul.png'
import { Link } from 'react-router-dom'
import { ShoppingOutlined, ArrowUpOutlined  } from '@ant-design/icons';
import { Badge ,BackTop ,Popover} from 'antd'

const style: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  border: "1px solid white",
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

let hov = new Audio;

const Navi: React.FC = () => {

  const [play, setPlay] = useState(false)
  const [nav,setNav] =useState(false)

  useEffect(() => {


    window.addEventListener('scroll', handlescroll)

  }, [])

const handlescroll=()=>{
  console.log(window.scrollY)
  if(window.scrollY >200){
  setNav(true)
  }else{
    setNav(false)
  }


}




  const handleSound = () => {
    hov.src = hover1;
    hov.play();
    setPlay(true)
  }
  const handleSoundOff = () => {
    setPlay(false)
  }

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <>
      <NavWrapper style={nav === true? {background:"white",position:"fixed",boxShadow:"0px 3px 3px 3px rgba(0,0,0,0.1)" }:{background:"transparent",position:"fixed" }}>

        <div style={{ position: 'absolute', zIndex: "1000" }}>
          <div style={{ position: "fixed" }}>
            <Link to="/">
              <img style={{ width: "110px", cursor: "pointer" }} src={candyFul} alt="CandyFul" />
            </Link>
          </div>
          <ul className="Nav" >
            <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav===true ? "liText2" :"liText"}><Link className={nav===true ? "Lin2":"Lin"} to="/"><span>Home</span></Link></li>
            <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav===true ? "liText2" :"liText"}><Link className={nav===true ? "Lin2":"Lin"} to='/about'><span>About</span></Link> </li>
            <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav===true ? "liText2" :"liText"}><Link className={nav===true ? "Lin2":"Lin"} to="/product"><span>Product</span></Link></li>
            <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav===true ? "liText2" :"liText"}><Link className={nav===true ? "Lin2":"Lin"} to='/'><span>Contact</span></Link></li>
            <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav===true ? "liText2" :"liText"}><Link className={nav===true ? "Lin2":"Lin"} to='/team'><span>Team</span></Link></li>
           <Popover placement="bottomRight" trigger="click" content={content}>
            <Badge style={{marginRight:"30px",marginTop:"5px"}} count={5}>
              <li className={nav=== true? "liCart2":"liCart"} style={{ fontSize: "25px" }}><ShoppingOutlined /></li>
            </Badge>
           </Popover>
          </ul>


        </div>

        <BackTop>
      <div style={style}><div  className="bt-flip"><ArrowUpOutlined /></div></div>
    </BackTop>

      </NavWrapper>
    </>
  )
}


export default Navi;