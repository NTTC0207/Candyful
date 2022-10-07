import React from 'react';
import { Row, Col, Divider } from 'antd'
import { Box } from "./style";
import whatsapp from '../../static/images/whatsapp.png'
import candyFulf from '../../static/images/candyFulf.png'


const Footer: React.FC = () => {
  return (
    <>
      <Box>

        <div className="f-title">
          <h1><span><img className="f-logo" src={candyFulf}/></span>Candyful</h1>

        </div>
        {/* <div className="f-title">

          <p>Sweetness, Your Way!</p>
        </div> */}

        <div className="f-social">
          <a href="https://facebook.com"><img src="https://i.postimg.cc/44pPB9wk/facebook.png" alt="fblogo"     /></a>
          <a href="https://twitter.com"><img src="https://i.postimg.cc/L8Q3nB4f/twitter.png" alt="twitterlogo" /></a>
          <a href="https://instagram.com"><img src="https://i.postimg.cc/TYG9S3Hy/instagram.png" alt="instalogo" /></a>
          <a href="https://whatsapp.com"><img src={whatsapp} alt="whatsapplogo"                                 /></a>

        </div>

        <Divider />
        <div style={{ textAlign: "center", width: "100%" }}>
          &copy;<span style={{ marginLeft: "3px" }}>2022 Candyful. All Rights Reserved</span>
        </div>
      </Box>
    </>
  )
}


export default Footer;