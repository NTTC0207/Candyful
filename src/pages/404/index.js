import { Button, Result } from 'antd';
import React from 'react';

const Error = () => {
  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "100px", alignItems: "center" }}>
        <Result
      style={{marginTop: "150px"}}
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        // extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    </div>

  )
}

export default Error;