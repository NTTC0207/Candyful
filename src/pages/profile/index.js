import { useEffect } from "react"
import { Alert, Avatar, Col, Row, Collapse, Space } from 'antd';
import Marquee from 'react-fast-marquee';
import * as actionCreators from '../../pages/Login/store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { UserOutlined } from '@ant-design/icons';
import UpdateProfile from './components/UpdateProfile'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';
axios.defaults.withCredentials = true;

const { Panel } = Collapse;


const Profile = () => {

    const dispatch = useDispatch()
    const profile = useSelector((state) => state.login.profile)
    const login = useSelector((state) => state.login.login)

    const ChangeDate = (date) => {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');

    }

    useEffect(() => {
        axios({
            method: "GET",
            url: process.env.REACT_APP_APIURL + '/api/profile',
            withCredentials: true
        })
            .then((res) => {

                dispatch(actionCreators.setProfile(res.data))

            })
            .catch((err) => { })

    }, [])

 
    // const addStr = () => {
    //     return profile.phoneNumber.substring(0, 3) + "-" + profile.phoneNumber.substring(3, profile.phoneNumber.length);
    // }

    if (login === true) {
        return (
            <div>



                <div style={{ position: 'absolute', top: "70px", width: "100%" }}>
                    <Alert
                        banner
                        message={
                            <Marquee pauseOnHover gradient={false}>
                                We will not, in any circumstances, share your personal information with other individuals or organizations without your permission, including public organizations, corporations or individuals, except when applicable by law. We do not sell, communicate or divulge your information to any mailing lists.
                            </Marquee>
                        }
                    />
                </div>

                <Row>
                    <Col lg={12} md={12} sm={24} xs={24}>

                        <div className="container1">
                            <div className="card1">


                                <Avatar className="pro-img" size={100} icon={< UserOutlined />} />

                                <h4>{profile.userName}</h4>
                                <h5> {profile.phoneNumber}</h5>
                                <div className="details">
                                    <div className="column">
                                        {/* <h2>1.6K</h2>
                            <span>Followers</span>
                        </div>
                        <div className="column">
                            <h2>852</h2>
                            <span>Following</span> */}
                                        <div style={{ padding: "0 15px" }}>{profile.address}</div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <UpdateProfile profile={profile} />
                                    {/* <button >Update</button> */}
                                    <button ><a className="profile-a" href="mailto:lkeki2015@gmail.com">Contact Us</a></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <div className="container2" style={{ width: "100%" }}>

                            <Space direction="vertical" style={{ width: "70%", float: "left" }}>
                                <div className="pr-order">Order History</div>

                                {

                 profile.length ===0 ?null : 

                                    profile.order.length === 0 ? <div style={{ color: "white" }}>  Make your first order <Link to="/product" style={{ cursor: "pointer", color: "white" }}>here</Link></div> :

                                        profile.order.map((item) => {
                                            return (
                                                <>
                                                    <Collapse collapsible="header">
                                                        <Panel header={<span>PaymentID:   {item.paymentID}</span>} key={item.orderID}>
                                                            <div> {ChangeDate(item.orderDate)}</div>
                                                            <div>RM {(item.totalAmout / 100).toFixed(2)}</div>

                                                        </Panel>
                                                    </Collapse>
                                                </>
                                            )
                                        })
                                }


                            </Space>
                        </div>
                    </Col>


                </Row>




            </div>
        )
    } else {
        return <Navigate to="/login" />
    }
}

export default Profile;