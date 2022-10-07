import React from 'react';
import product from '../../static/video/product.mp4'
import { Grid, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, ShoppingCartOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const Product: React.FC = () => {
    return (
        <>
            <div style={{ width: "100vw",height:"100%"}}>
                <div className="p-title">
                    <h1>Our Product</h1>
                </div>

                <div style={{ width: "100%", display: "flex", justifyContent: "center",marginBottom:"100px" }}>
                    <div style={{ width: "80%", background: "white", padding: "40px 40px" }}>
                        <Row justify='start' gutter={[30, 30]}>
                            <Col lg={8} md={12} sm={24} xs={24} >
                                <div className="p-card">
                                    <Card

                                        cover={
                                            <div style={{ overflow: 'hidden', width: "100%" }}>
                                                <img
                                                    className="p-img"
                                                    alt="example"
                                                    src="https://images.pexels.com/photos/1578293/pexels-photo-1578293.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                                                />
                                            </div>
                                        }
                                        actions={[

                                            <LikeOutlined />,
                                            <ShoppingCartOutlined key="addCart" />,
                                        ]}
                                    >
                                        <Meta

                                            title={<div className="p-inner"><span style={{ float: "left" }}>Caramels</span> <span>RM14</span> </div>}
                                            description="This is the description"
                                        />
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={8} md={12} sm={24} xs={24} >
                                <div className="p-card">
                                    <Card

                                        cover={
                                            <div style={{ overflow: 'hidden', width: "100%" }}>
                                                <img
                                                    className="p-img"
                                                    alt="example"
                                                    src="https://images.pexels.com/photos/6798399/pexels-photo-6798399.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                />
                                            </div>
                                        }
                                        actions={[

                                            <LikeOutlined />,
                                            <ShoppingCartOutlined key="addCart" />,
                                        ]}

                                    >
                                        <Meta

                                            title={<div className="p-inner"><span style={{ float: "left" }}>Gummies</span> <span>RM27</span> </div>}

                                            description="This is the description"
                                        />

                                    </Card>
                                </div>
                            </Col>
                            <Col lg={8} md={12}  sm={24} xs={24}>
                                <div className="p-card">
                                    <Card

                                        cover={
                                            <div style={{ overflow: 'hidden', width: "100%" }}>
                                                <img
                                                    className="p-img"
                                                    alt="example"
                                                    src="https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                                                />
                                            </div>
                                        }
                                        actions={[

                                            <LikeOutlined />,
                                            <ShoppingCartOutlined key="addCart" />,
                                        ]}
                                    >
                                        <Meta

                                            title={<div className="p-inner"><span style={{ float: "left" }}>Chewing gums</span> <span>RM12</span> </div>}

                                            description="This is the description"
                                        />
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={8} md={12}  >
                                <div className="p-card">
                                    <Card

                                        cover={
                                            <div style={{ overflow: 'hidden', width: "100%" }}>
                                                <img
                                                    className="p-img"
                                                    alt="example"
                                                    src="https://images.pexels.com/photos/1375808/pexels-photo-1375808.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                                                />
                                            </div>
                                        }
                                        actions={[

                                            <LikeOutlined />,
                                            <ShoppingCartOutlined key="addCart" />,
                                        ]}
                                    >
                                        <Meta

                                            title={<div className="p-inner"><span style={{ float: "left" }}>Licorie</span> <span>RM25</span> </div>}

                                            description="This is the description"
                                        />
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={8} md={12} sm={24} xs={24} >
                                <div className="p-card">
                                    <Card

                                        cover={
                                            <div style={{ overflow: 'hidden', width: "100%" }}>
                                                <img
                                                    className="p-img"
                                                    alt="example"
                                                    src="https://images.pexels.com/photos/89731/pexels-photo-89731.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                                                />
                                            </div>
                                        }
                                        actions={[

                                            <LikeOutlined />,
                                            <ShoppingCartOutlined key="addCart" />,
                                        ]}
                                    >
                                        <Meta

                                            title={<div className="p-inner"><span style={{ float: "left" }}>Lollipops</span> <span>RM16</span> </div>}

                                            description="This is the description"
                                        />
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={8} md={12} sm={24} xs={24} >
                                <div className="p-card">
                                    <Card

                                        cover={
                                            <div style={{ overflow: 'hidden', width: "100%" }}>
                                                <img
                                                    className="p-img"
                                                    alt="example"
                                                    src="https://images.pexels.com/photos/1236662/pexels-photo-1236662.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                                                />
                                            </div>
                                        }
                                        actions={[

                                            <LikeOutlined />,
                                            <ShoppingCartOutlined key="addCart" />,
                                        ]}
                                    >
                                        <Meta

                                            title={<div className="p-inner"><span style={{ float: "left" }}>Sours</span> <span>RM15</span> </div>}

                                            description="This is the description"
                                        />
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={8} md={12}  sm={24} xs={24}>
                                <div className="p-card">
                                    <Card

                                        cover={
                                            <div style={{ overflow: 'hidden', width: "100%" }}>
                                                <img
                                                    className="p-img"
                                                    alt="example"
                                                    src="https://images.pexels.com/photos/1296170/pexels-photo-1296170.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                                                />
                                            </div>

                                        }
                                        actions={[

                                            <LikeOutlined />,
                                            <ShoppingCartOutlined key="addCart" />,
                                        ]}
                                    >
                                        <Meta

                                            title={<div className="p-inner"><span style={{ float: "left" }}>Jelly</span> <span>RM17</span> </div>}

                                            description="This is the description"
                                        />
                                    </Card>
                                </div>
                            </Col>








                        </Row>

                    </div>


                </div>



            </div>
        </>
    )
}

export default Product;