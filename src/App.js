import React, { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./sass/main.scss"
// import 'antd/dist/antd.css';
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from './store/homeReducer'
import Navi from "./common/header/index"
import Footer from './common/footer/index'
import {Spin} from 'antd'
import Loading from './pages/loading/index'
import axios from 'axios'
import { apiUrl } from './api/index'
import Inter from './pages/loading/interceptor'
import { Slide } from 'react-reveal'

const Home = lazy(() => {
  return Promise.all([
    import("./pages/home/index"),
    new Promise(resolve => setTimeout(resolve, 2000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const Product = lazy(() => {
  return Promise.all([
    import("./pages/products/index"),
    new Promise(resolve => setTimeout(resolve, 2000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const Team = lazy(() => {
  return Promise.all([
    import("./pages/Team/index"),
    new Promise(resolve => setTimeout(resolve, 2000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const About = lazy(() => {
  return Promise.all([
    import("./pages/About/index"),
    new Promise(resolve => setTimeout(resolve, 2000))
  ])
    .then(([moduleExports]) => moduleExports);
});


const Login =lazy(()=>import("./pages/Login/index"))


const Cart = lazy(() => {
  return Promise.all([
    import("./pages/Cart/index"),
    new Promise(resolve => setTimeout(resolve, 2000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const Register =lazy(()=>import("./pages/Register/index"))

const Profile = lazy(() => {
  return Promise.all([
    import("./pages/profile/index"),
    new Promise(resolve => setTimeout(resolve, 2000))
  ])
    .then(([moduleExports]) => moduleExports);
});


const Error = lazy(() => import("./pages/404/index"))
const UnAuthorized = lazy(() => import("./pages/404/403"))



const App = () => {

  const [load, setLoad] = useState(false)


  axios.interceptors.response.use(
    res => {

      return res;
    },
    err => {
      if (err.response.status === 401) {
        console.log("hello")
        setLoad(true)
        axios({
          method: "GET",
          url: apiUrl + "/api/refresh",
          withCredentials: true
        }).then((res) => {
          if (res.status === 200) {
            setLoad(false)
          }
        })
      }
      

      return Promise.reject(err);

    }

  )


  return (
    <>
      <Provider store={store} >
        <PersistGate persistor={persistor}>

          {/* <Slide left opposite when={load}>
            <Inter />
          </Slide> */}


          <BrowserRouter>
            {/* <Refresh /> */}
         
           
            <Navi />
            <Suspense fallback={<Loading />}>
              <Routes>
            
                <Route element={<Home />} path="/" />
                <Route element={<Product />} path="/Product" />
                <Route element={<Loading />} path="/loading" />
                <Route element={<Team />} path="/team" />
                {/* <Route element={<About />} path="/about" /> */}
                <Route element={<Login />} path="/login" />
                <Route element={<Cart />} path="/check-out" />
                <Route element={<Register />} path="/register" />
                <Route element={<Profile />} path="/profile" />
                <Route element={<Error />} path="*" />
                <Route element={<UnAuthorized />} path="/403" />
              
              </Routes>
              <Footer />
            </Suspense>
    
          </BrowserRouter>

        </PersistGate>
      </Provider>
    </>
  )
}

export default App;
