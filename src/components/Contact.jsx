import React from 'react'

function Contact() {
  return (
    <>
    <div className="outercontact">
    <div className="upperfeature">
            <div className="bigtext">
                <h1>C</h1>
            </div>
            <div className="featuredesc">
                <h3>WE'D LOVE TO HEAR ABOUT PROJECT</h3>
            </div>
        </div>
        <div className="downcontact">
            <div className="upperdowncontact">
                <input type="text"  placeholder='Name'/>
                <input type="email" placeholder='Email' />
                <input type="number" placeholder='Phone' />

            </div>
            <div className="downdowncontact">
                <textarea name="contact" placeholder='Message' id="contact" cols="30" rows="10"></textarea>
            </div>
            <div className="submitbutton">
                <button>SUBMIT</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Contact
