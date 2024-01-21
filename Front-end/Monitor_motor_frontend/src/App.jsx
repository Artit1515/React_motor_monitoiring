import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home.jsx'
import AboutUs from './Component/AboutUs'
import SignIn from './Component/SignIn'
import SignUp from "./Component/SignUp.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home />}></Route>
      <Route path="home" element ={<Home />}></Route>
      <Route path="sign-in" element ={<SignIn />}></Route>
      <Route path="/sign-up" element ={<SignUp />}></Route>
      <Route path="/about-us" element ={<AboutUs />}></Route>
      
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
