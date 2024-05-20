import React from 'react'
import scroll from "../assets/images/scroll.png"

function Hero() {
  return (
    <>
    <div className="herocontainer">
        <div className="upperhero">

        <div className="heroheading">
            <h1>CREATIVES</h1>
        </div>
        <div className="herodesc">
            <p>POWER BY PSDFREEBIES.COM</p>
        </div>
        </div>
        <div className="downhero">
            <div className="scrolldes">
                <p>Scroll Down</p>
            </div>
            <div className="scrollimg">
                <img src={scroll} alt="" />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Hero
