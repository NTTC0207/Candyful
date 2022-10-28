import React, { useState, useEffect } from "react"
import { Button, Modal, Spin, Alert, Form,Avatar, Input, message, Upload, Slider, notification } from 'antd';
import ImgCrop from 'antd-img-crop';
import { apiUrl } from '../../api/index'
import Marquee from 'react-fast-marquee';
import * as actionCreators from '../../pages/Login/store/actionCreators'
import {useDispatch,useSelector} from 'react-redux'
import { UserOutlined } from '@ant-design/icons';
import UpdateProfile from './components/UpdateProfile'
import axios from 'axios';


const Profile = () => {

    const dispatch =useDispatch()
    const profile = useSelector((state)=>state.login.profile)

    const props = {
        width: 500,  //裁剪宽度
        height: 300, //裁剪高度
        resize: false, //裁剪是否可以调整大小
        resizeAndDrag: true, //裁剪是否可以调整大小、可拖动
        modalTitle: "上传图片", //弹窗标题
        modalWidth: 600, //弹窗宽度
    };
    const [fileList, setFileList] = useState([]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList)
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    useEffect(() => {
        axios({
            method:"GET",
            url:apiUrl+'/api/profile'
        })
        .then((res)=>(
            dispatch(actionCreators.setProfile(res.data))
            
            ))
        
    }, [])


    function addStr(str, index, stringToAdd){
        return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
      }


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

            <div className="container1">
                <div className="card1">
                   
                   
                    <Avatar  className="pro-img" size={100} icon={< UserOutlined/>} />
                 
                    <h4>{profile.userName}</h4>
                    <h5> {addStr(profile.phoneNumber, 3, "-")}</h5>
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
                        <UpdateProfile  profile={profile}/>
                        {/* <button >Update</button> */}
                        <button ><a className="profile-a" href="mailto:lkeki2015@gmail.com">Contact Us</a></button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Profile;