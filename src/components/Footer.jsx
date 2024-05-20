import React from 'react'
import bee from "../assets/images/bee.png"

function Footer() {
  return (
    <>
    <div className="outerfooter">
        <div className="leftouterfooter">
            <p>&copy; 2016 PSDfreebies.com -All Right Reserved</p>
        </div>
        <div className="rightouterfooter">
            <p> <img src={bee} alt=""  style={{width:'20vw'}}/>  </p>
        </div>
    </div>
      
    </>
  )
}

export default Footer
