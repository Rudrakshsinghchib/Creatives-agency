import React from 'react'
import point from "../assets/images/point1.png"

function Point() {
  return (
    <>
    <div className="outerpoint">
        <div className="leftpoint">
            <div className="leftleftpoint">
                <img src={point} alt="" />

            </div>
            <div className="rightleftpoint">
                <p>Cum sociis natoquie Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laborum natus facere dolore iure possimus a repellat maxime? Sunt voluptatum repellat labore reiciendis eius suscipit quaerat laborum est quae at.</p>

            </div>

        </div>
        <div className="leftpoint">
            <div className="leftleftpoint">
                <img src={point} alt="" />

            </div>
            <div className="rightleftpoint">
                <p>Cum sociis natoquie Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laborum natus facere dolore iure possimus a repellat maxime? Sunt voluptatum repellat labore reiciendis eius suscipit quaerat laborum est quae at.</p>

            </div>

        </div>
        
    </div>
      
    </>
  )
}

export default Point
