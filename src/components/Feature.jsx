import React from 'react'
import feature1 from '../assets/images/feature1.png'
import feature2 from '../assets/images/feature2.png'
import feature3 from '../assets/images/feature3.png'

function Feature() {
  return (
    <>
    <div className="outerfeature">
        <div className="upperfeature">
            <div className="bigtext">
                <h1>W</h1>
            </div>
            <div className="featuredesc">
                <h3>WE ARE AN AWESOME AGENCY</h3>
            </div>
        </div>
        <div className="downfeature">
            <div className="perfeature">
                <div className="perfeatureimg">
                    <img src={feature3} alt="" />
                </div>
                <div className="perfeatureheading">
                    <h3>FEATURE ONE</h3>
                </div>
                <div className="perfeaturedesc">
                    <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus</p>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg">
                    <img src={feature3} alt="" />
                </div>
                <div className="perfeatureheading">
                    <h3>FEATURE TWO</h3>
                </div>
                <div className="perfeaturedesc">
                    <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus</p>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg">
                    <img src={feature2} alt="" />
                </div>
                <div className="perfeatureheading">
                    <h3>FEATURE THREE</h3>
                </div>
                <div className="perfeaturedesc">
                    <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus</p>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg">
                    <img src={feature1} alt="" />
                </div>
                <div className="perfeatureheading">
                    <h3>FEATURE FOUR</h3>
                </div>
                <div className="perfeaturedesc">
                    <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus</p>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Feature
