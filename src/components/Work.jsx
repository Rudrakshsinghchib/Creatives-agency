import React from 'react'
import about2 from "../assets/images/about2.jpg"


function Work() {
  return (
    <>
    <div className="outerabout2">
        <div className="leftouterabout lefti2">
            <div className="headingleftouterabout">
            <div className="upperleftouterabout">
                <p>Jan 4,2016 | In Culture</p>
            </div>
                <h3>AKITA INU DOG</h3>
            </div>
            <div className="upperleftouteraboutdesc">
                <p>Cum sociis nataque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, debitis reiciendis doloremque magnam fugiat praesentium voluptatum repudiandae dolor, quas labore tenetur? Ut.
                </p>
            </div>
            <div className="downleftouteraboutdesc">
                <p>Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dotor sit amen ,consectetur adipising elit,Sed posuere</p>
            </div>

        </div>
        <div className="rightouterabout">
            <img src={about2} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default Work
