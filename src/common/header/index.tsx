import React, { useState, useEffect, CSSProperties } from 'react';
import { NavWrapper, MobileWrapper } from './style'
import hover1 from '../../static/hover.mp3'
import candyFul from '../../static/images/candyFul.png'
import candyMobile from '../../static/images/candyFulf.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingOutlined, ArrowUpOutlined, TeamOutlined, SmileOutlined, UserOutlined, LoginOutlined, DownOutlined, LogoutOutlined, HomeOutlined, ShoppingCartOutlined, BookOutlined } from '@ant-design/icons';
import { Badge, BackTop, Dropdown, Menu, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../../pages/Login/store/actionCreators'
import axios from 'axios'

import { Spin as Hamburger } from 'hamburger-react'
axios.defaults.withCredentials = true;

const style: CSSProperties = {
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

const Navi: React.FC = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [play, setPlay] = useState(false)
  const [nav, setNav] = useState(false)
  const [res, setRes] = useState(false)

  const login = useSelector((state: any) => state.login.login)
  const cart = useSelector((state: any) => state.login.cart)

  useEffect(() => {
    window.addEventListener('scroll', handlescroll)

    if (login) {
      axios({
        method: 'GET',
        url: process.env.REACT_APP_APIURL + "/api/cart",
        withCredentials: true
        
      })
        .then((res) => {
          dispatch(actionCreators.setCart(res.data.length))
        })
    }

  }, [])





  const handlescroll = () => {

    if (window.scrollY > 200) {
      setNav(true)
    } else {
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


  const handleHome = () => {
    navigate("/")
    setRes(false)
  }
  const handleAbout = () => {
    navigate("/about")
    setRes(false)
  }
  const handleProduct = () => {
    navigate("/product")
    setRes(false)
  }
  const handleTeam = () => {
    navigate("/team")
    setRes(false)
  }
  const handleLogin = () => {
    navigate("/login")
    setRes(false)
  }
  const handleCart = () => {
    navigate("/check-out")
    setRes(false)
  }
  const handleProfile = () => {
    navigate("/profile")
    setRes(false)
  }

  const tackle = () => {
    dispatch(actionCreators.setLoad(false))
    axios({
      method: "DELETE",
      url: process.env.REACT_APP_APIURL + "/api/login",

    })
  }


  return (
    <>
      <div className="Desktop">
        <NavWrapper style={nav === true ? { background: "white", position: "fixed", boxShadow: "0px 3px 3px 3px rgba(0,0,0,0.1)" } : { background: "transparent", position: "fixed" }}>

          <div style={{ position: 'absolute', zIndex: "1000" }}>
            <div style={{ position: "fixed" }}>
              <Link to="/">
                <img style={{ width: "110px", cursor: "pointer", userSelect: "none" }} src={candyFul} alt="CandyFul" />
              </Link>

            </div>
            <ul className="Nav" >
              <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav === true ? "liText2" : "liText"}><Link className={nav === true ? "Lin2" : "Lin"} to="/"><span>Home</span></Link></li>
              {/* <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav === true ? "liText2" : "liText"}><Link className={nav === true ? "Lin2" : "Lin"} to='/about'><span>About</span></Link> </li> */}
              <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav === true ? "liText2" : "liText"}><Link className={nav === true ? "Lin2" : "Lin"} to="/product"><span>Product</span></Link></li>
              <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav === true ? "liText2" : "liText"}><Link className={nav === true ? "Lin2" : "Lin"} to='/team'><span>Team</span></Link></li>
            
              {
                login === true ?
                  <>
                          <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav === true ? "liText2" : "liText"}><Link className={nav === true ? "Lin2" : "Lin"} to='/profile'><span>Profile</span></Link></li>
                    <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav === true ? "liText2" : "liText"} ><span onClick={() => (tackle(), dispatch(actionCreators.setLogout()))}> Logout</span></li>
                    <Badge style={{ marginRight: "37px", marginTop: "5px" }} count={cart}>
                    <li style={{ fontSize: "25px", padding: "0 7px" }}><Link to='/check-out' className={nav === true ? "liCart2" : "liCart"}><ShoppingOutlined /></Link></li>
                  </Badge>

                  </>
                  : 
                  
                  <>
                   <li onMouseEnter={handleSound} onMouseOut={handleSoundOff} className={nav === true ? "liText2" : "liText"}><Link className={nav === true ? "Lin2" : "Lin"} to='/login'><span>Login</span></Link></li>
           
                
                  </>
                 
                  
              }


            </ul>
          </div>

        </NavWrapper>
      </div>


      <div className="Mobile">
        <MobileWrapper style={res === true ? { height: "333px" } : { height: "70px" }}>
          <Link to="/">
            <img style={{ width: "70px", height: "70px", cursor: "pointer" }} src={candyMobile} alt="CandyFul" />
          </Link>


          <div style={{ position: "absolute", right: "10px", top: "11px" }}>
            <div style={{ display: "inline-flex" }}>
              {
                login === true ?
                  <div style={{ marginTop: "10px", marginRight: "5px", cursor: "pointer" }}>
                    <Badge style={{ marginRight: "4px", marginTop: "8px" }} count={cart}>
                      <li style={{ fontSize: "30px", color: "#FA7070" }} onClick={() => { handleCart() }}><ShoppingOutlined /></li>
                    </Badge>
                  </div> : null
              }
              <Hamburger toggled={res} toggle={setRes} color="#FA7070" />
            </div>
          </div>



          <ul className="MNav">
            <li className="MliCart" onClick={() => handleHome()}>Home</li>
            {/* <li className="MliCart" onClick={() => handleAbout()}>About</li> */}
            <li className="MliCart" onClick={() => handleProduct()}>Product</li>
            <li className="MliCart" onClick={() => handleTeam()}>Team</li>
            <li className="MliCart" onClick={() => handleProfile()}>Profile</li>

            {login === true ? <li className="MliCart" onClick={() => dispatch(actionCreators.setLogout())}><LogoutOutlined /> Logout</li> : <li className="MliCart" onClick={() => handleLogin()}><LoginOutlined /> Login</li>}

          </ul>

        </MobileWrapper>


      </div>








      <BackTop>
        <div style={style}><div className="bt-flip"><ArrowUpOutlined /></div></div>
      </BackTop>
    </>
  )
}





export default Navi;