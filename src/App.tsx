import React,{Suspense,lazy} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./sass/main.scss"
import 'antd/dist/antd.css';
import Navi from "./common/index"
import Footer from './common/footer/index'
import Loading from './pages/loading/index'
import { ParallaxProvider } from 'react-scroll-parallax';


const Home = lazy(()=>import("./pages/home/index"))
const Product = lazy(()=>import("./pages/products/index"))
const Team = lazy(()=>import("./pages/Team/index"))
const About =lazy(()=> import("./pages/About/index"))

const App :React.FC =()=>{

  return(
    <>

<ParallaxProvider>
<BrowserRouter>
<Navi/>

<Suspense fallback={<div>...loading</div>}>
<Routes>
   <Route element={<Home />} path="/"/> 
   <Route element={<Product/>} path="/Product"/> 
   <Route element={<Loading />} path="/loading"/> 
   <Route element={<Team/>} path="/team"/> 
   <Route element={<About/>} path="/about"/> 

</Routes>
<Footer />
</Suspense>


</BrowserRouter>

</ParallaxProvider>

    </>
  )
}

export default App;
