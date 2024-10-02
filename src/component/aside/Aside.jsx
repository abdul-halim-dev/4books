import Footer from "../footer/Footer"
import Header from "../header/Header"

import {   Outlet } from "react-router-dom"
 

const Aside = () => {
  return (
    <div className="aside">
        <Header/>
        <Outlet />
        <Footer/>

    </div>
  )
}

export default Aside