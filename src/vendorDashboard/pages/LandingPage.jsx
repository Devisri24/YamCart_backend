import React ,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Register from '../components/forms/Register'
import Login from '../components/forms/Login'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/forms/Welcome'
import AllProduct from '../components/AllProduct'


const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showFirm, setShowFirm] = useState(false)
    const [showProduct, setShowProduct] = useState(false)
    const [showWelcome, setShowWelcome] = useState(false)
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [showLogOut, setShowLogOut] = useState(false)
    const [showFirmTitle, setShowFirmTitle] = useState(true)

     useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken){
        setShowLogOut(true)
    }
  }, [])

  useEffect(()=>{
      const firmName = localStorage.getItem('firmName');
      const firmId = localStorage.getItem('firmId')
      if(firmName || firmId ){
          setShowFirmTitle(false)
          setShowWelcome(true)
      }
  },[])

     const logOutHandler =()=>{
      localStorage.removeItem("loginToken");
      localStorage.removeItem("firmId");
      localStorage.removeItem('firmName');
      confirm("Are you sure want to logout?")
      setShowLogOut(false)
      setShowFirmTitle(true)
  }

const showLoginHandler =()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowAllProducts(false)

}

const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)

}

const showFirmHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(true)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
  }else{
    alert("please login");
    setShowLogin(true)
  }
}
const showProductHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(true)
    setShowWelcome(false)
    setShowAllProducts(false)
    }else{
        alert("please login")
        setShowRegister(false)
    setShowLogin(true)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    }

}
const showWelcomeHandler = ()=>{
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(true)
    setShowAllProducts(false)

}
const showAllProductsHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(true)

}else{
    alert("please login")
    setShowLogin(true)
 }
}
  return (
    <section className = 'landingSection'>
  <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler}
            showLogOut = {showLogOut}
            logOutHandler = {logOutHandler}
            />
        <div className ="collectionSection">
        <SideBar showFirmHandler={showFirmHandler} showProductHandler ={showProductHandler}
            showAllProductsHandler = {showAllProductsHandler}
            showFirmTitle={showFirmTitle}
            />
          {showFirm && showLogOut && <AddFirm />}
          {showProduct && showLogOut && <AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProducts && showLogOut && <AllProduct />}
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler} onLoginSuccess={() => setShowLogOut(true)} />}
          {showRegister && <Register showLoginHandler = {showLoginHandler}/>}
        </div>
        
    </section>
)
}

export default LandingPage