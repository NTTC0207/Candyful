import React, { useState } from 'react';
import { Button, Modal, Spin, Form, Input, message, Upload, Slider, notification,Typography } from 'antd';
import { useNavigate ,Navigate } from 'react-router-dom'
import axios from 'axios';
import { apiUrl } from '../../../api/index'
import { useSelector } from 'react-redux'
axios.defaults.withCredentials = true;

const {Text} =Typography;


const UpdateProfile = ({ profile }) => {

    const navigate= useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [spinner, setSpinner] = useState(false)

    const login = useSelector((state) => state.login.login)


  

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const onFinish = (values) => {
console.log(values.name,values.desc)
        setSpinner(true)

        let Form = new FormData();


        Form.append("Address", values.desc)
        Form.append("PhoneNumber", values.name)

        axios({
            method: "PUT",
            url: apiUrl + "/api/profile",
            data: Form,
            headers:{'Content-Type': 'application/json; charset=utf-8'},
            withCredentials: true,

        })
            .then((res) => {
                if (res.status === 200) {
                    navigate("/")
                   
                }
            })
            .catch((err) => {
                setSpinner(false)
                console.log(err)
            })




    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const props = {
        width: 500,  //裁剪宽度
        height: 300, //裁剪高度
        resize: false, //裁剪是否可以调整大小
        resizeAndDrag: true, //裁剪是否可以调整大小、可拖动
        modalTitle: "上传图片", //弹窗标题
        modalWidth: 600, //弹窗宽度
    };
    if(login){

        return (
            <>
                <button style={{ background: "#FA7070", color: "white" }} onClick={showModal}>
                    Update
                </button>
    
                <Modal centered open={isModalOpen} onCancel={handleCancel} footer={null}>
                    <Spin spinning={spinner}>
                        <Form
                            layout='vertical'
                            name="basic"
                            initialValues={{ name: profile.phoneNumber, desc: profile.address }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off">
    
                            <Form.Item
                                label="Phone"
                                name="name"
                                rules={[{ required: true, message: 'Please input phone number!' }]}>
                                <Input placeholder='Phone number (01XXXXXXXX)' />
                            </Form.Item>
    
                            <Form.Item
                                label="Address"
                                name="desc"
                                rules={[{ required: true, message: 'Please input your address!' }]}>
                                <Input.TextArea showCount maxLength={200} rows={3} placeholder="Address " />
                            </Form.Item>
    
    
    
                            <Form.Item style={{ textAlign: "center" }}>
                                <Button type="primary" htmlType="submit" style={{ width: "40%" }}>
                                    Save
                                </Button>
                            </Form.Item>
                            <Text type="secondary">*We will use these information to contact and deliver your order</Text>
                        </Form>
                    </Spin>
                </Modal>
    
            </>
        )
    }else{
        return <Navigate to="/login" />
    }
  
}

export default UpdateProfile;