import React from 'react'
import phone1 from "../assets/images/phone1.png"

function Phone() {
  return (
    <>
    <div className="outerphone">
        <div className="leftouterphone">
            <div className="upperleftouterphone">
            <div className="firstleftouterphone">
                <h3>AKINA INU DOG</h3>
            </div>
            <div className="descleftouterphone">
                <p>Cum sociis Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eaque unde pariatur nisi doloremque ipsum rem? A, eveniet magni!  <br /> Tenetur fugit deleniti distinctio  blanditiis voluptate, dolores laudantium <br /> accusantium eaque beatae.</p>
            </div>
            </div>
            <div className="leftouterphone">
                <div className="firstleftouterphone1 bcolor">
                    <p>
                        FULLY RESPONSIVE DESIGN
                        
                        </p>

                </div>
                <div className="secondleftouterphone bcolor">
                    <p>HIGH QUALITY CODE</p>

                </div>
                <div className="thirdleftouterphone bcolor">
                    <p>DIFFERENT HEADERS & LAYOUT</p>

                </div>

            </div>

        </div>
        <div className="rightouterphone">
            <img src={phone1} style={{width:'18vw'}} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default Phone
