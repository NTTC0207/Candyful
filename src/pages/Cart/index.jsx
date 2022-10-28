import React, { useCallback, useEffect, useState } from 'react';
import { Space, Table, Tag, notification, Button, Image, Row, Col,Input ,Form} from 'antd';
import axios from 'axios'
import { CartWrapper } from './style'
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import { apiUrl } from '../../api';
import * as actionCreators from '../Login/store/actionCreators'
import { useDispatch, useSelector } from 'react-redux';
import {  Navigate } from 'react-router-dom'

axios.defaults.withCredentials = true;



const Cart = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([])
  const login = useSelector((state) => state.login.login)


  useEffect(() => {
    axios({
      method: "GET",
      url: apiUrl + "/api/cart",
      withCredentials: true
    }).then((res) => (setProduct(res.data), dispatch(actionCreators.setCart(res.data.length))))
  }, [])

  const getSum = () => {
    let product1 = JSON.parse(JSON.stringify(product))
    let total = 0;
    product1.map(item => {
      total += (item.price * item.itemQuantity)
    })
    return total.toFixed(2)
  }

  const productFooter = () => {
    return (
      <>

        {/* <thead className="ant-table-thead"><tr><th className="ant-table-cell"><div style={{fontWeight: "bold"}}>Product</div></th><th className="ant-table-cell" style={{textAlign: "center"}}><div style={{fontWeight: "bold"}}>Price</div></th><th className="ant-table-cell" style={{textAlign: "center"}}><div style={{fontWeight: "bold"}}>Quantity</div></th><th className="ant-table-cell" style={{textAlign: "center"}}><div style={{fontWeight: "bold"}}>Subtotal</div></th></tr></thead> */}


        <Row>
          <Col lg={12} sm={24} md={12} xs={24}>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
           

              {/* <Form layout='inline'>
                <Form.Item>
                <Input size="medium" placeholder='Coupon code'/>
                </Form.Item>
                <Form.Item>
                  <Button size="medium">Apply code</Button>
                </Form.Item>
              </Form>
           */}

    
            </div>

          </Col>
          <Col lg={12} sm={24} md={12} xs={24}>
            <div style={{ width: "100%",display: "flex", alignItems:"center"}}>
              <div className="c-total">Total:   <span style={{float: "right",marginRight:"15px"}}>RM{getSum() === 0 ? 0 : getSum()}</span> </div>
              <div style={{float:"right"}}>
                <Button size="medium" style={{}} onClick={() => { handleCheckout() }}>Proceed to checkout</Button>
              </div>

            </div>
          </Col>
        </Row>







      </>
    )
  }



  const handleCheckout = () => {

    axios({
      method: "POST",
      url: apiUrl + "/api/payment/create-checkout-session",
      withCredentials: true
    }).then((res) => { window.location.href = res.data })
      .catch((err) => alert(err))
  }

  const handleAdd = useCallback((k) => {
    let product1 = JSON.parse(JSON.stringify(product))

    let index = product1.findIndex(item => item.itemID === k)

    if (index >= 0) {
      product1[index].itemQuantity = (product1[index].itemQuantity | 0) + 1
    }
    setProduct(product1)

    axios({
      method: "PUT",
      url: apiUrl + "/api/cart/" + k
    })

  }, [product])

  const handleMinus = (k) => {
    let product1 = JSON.parse(JSON.stringify(product))

    let index = product1.findIndex(item => item.itemID === k)

    if (index >= 0 && product1[index].itemQuantity != 0) {
      product1[index].itemQuantity = (product1[index].itemQuantity | 0) - 1
      axios({
        method: "PUT",
        url: apiUrl + "/api/cart/minus/" + k
      })
      setProduct(product1)
    }
    if (index >= 0 && product1[index].itemQuantity === 0) {
      handleDelete(k)
    }




  }

  const handleDelete = (id) => {
    axios({
      method: "DELETE",
      url: apiUrl + "/api/cart/" + id
    }).then(() => {
      axios({
        method: "GET",
        url: apiUrl + "/api/cart",
        withCredentials: true
      })
        .then((res) => {
          setProduct(res.data)
          dispatch(actionCreators.setCart(res.data.length))
        })

    })

  }

  const columns = [
    //       {
    // width:100,
    //         render: (_,product) =>
    //         <div>
    //           <img style={{height:"50px",width:"50px",objectFit:"cover"}} src={`${apiUrl}${"/"+product.purl}`} />
    //         </div>,
    //       },
    {
      title: () => <div style={{ fontWeight: "bold" }}>Product</div>,
      dataIndex: 'pname',
      key: 'id',
      render: (_, product) =>
        <div style={{ width: "100%", float: 'left' }}>
          <img style={{ height: "100px", width: "100px", objectFit: "cover" }} src={`${apiUrl}${"/" + product.purl}`} />
          <span style={{ marginLeft: '5px' }}> {product.pname}</span>

        </div>,
    },
    {
      title: () => <div style={{ fontWeight: "bold" }}>Price</div>,
      dataIndex: 'price',
      key: 'id',
      align: "center",
      responsive: ['md'],
      render: (_, product) => (
        <>
          <div>
            RM{(product.price).toFixed(2)}
          </div>
        </>
      )

    },

    {
      title: () => <div style={{ fontWeight: "bold" }}>Quantity</div>,
      dataIndex: 'itemQuantity',
      align: "center",
      render: (_, product) => (
        <>
          <div>
            <LeftOutlined onClick={() => handleMinus(product.itemID)} />{product.itemQuantity}<RightOutlined onClick={() => handleAdd(product.itemID)} />
          </div>
        </>
      )
    },
    {
      title: () => <div style={{ fontWeight: "bold" }}>Subtotal</div>,
      dataIndex: 'price',
      key: 'id',
      align: "center",
      render: (_, product) => (
        <>
          <div>
            RM{(product.itemQuantity * product.price).toFixed(2)}
          </div>
        </>
      )

    },

    // {
    //   title: 'Action',
    //   key: 'id',
    //   responsive: ['md'],
    //   render: (_, product) => (
    //     <Space size="middle">
    //       <div style={{ cursor: "pointer" }} onClick={() => handleDelete(product.itemID)}> <CloseOutlined /> </div>
    //     </Space>
    //   ),
    // },
  ];

  if (login) {
    return (
      <>
        <CartWrapper style={{ height: "100%", width: "100vw" }}>
          <div className="p-title">
            <h1>Checkout</h1>
          </div>

          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "100px" }}>
            <div className="res-Table" style={{ overflow: "hidden" }}>

              <Table rowKey={(product) => product.itemID} columns={columns} dataSource={product} footer={() => productFooter()} pagination={false} />

            </div>
          </div>
        </CartWrapper>
      </>
    )
  } else {
    return <Navigate to="/login" />
  }


}

export default Cart