import { Button, Result } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom'

const UnAuthorized = () => {
  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "100px", alignItems: "center" }}>
        <Result
      style={{marginTop: "150px"}}
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
        // extra={<Link to="/"><Button type="primary" style={{border:'1px solid white'}}>Back Home</Button></Link>}
        />
      </div>
    </div>
  )
}

export default UnAuthorized ;