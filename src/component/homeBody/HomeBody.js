import React from 'react'
import homePageImage from "../../asset/home-page-imag.PNG";

import "./HomeBody.css"
function HomeBody() {
  return (
    <div className='home-body'>
      <img src={homePageImage} alt='home-page' width={"50%"}/>
    </div>
    
  )
}

export default HomeBody