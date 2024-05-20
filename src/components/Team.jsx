import React from 'react'
import team1 from "../assets/images/team1.jpg"
import team2 from "../assets/images/team2.jpg"
import team3 from "../assets/images/team3.jpg"
import team4 from "../assets/images/team4.jpg"

function Team() {
  return (
    <>
    <div className="outerblog">
        <div className="upperfeature">
            <div className="bigtext big2">
                <h1>T</h1>
            </div>
            <div className="featuredesc fea2">
                <h3>OUR TEAM</h3>
            </div>
            <div className="blogpunch">
                <p>sales long tail influencer pitch release niche market.</p>
            </div>
        </div>
        <div className="downfeature">
            <div className="perfeature">
                <div className="perfeatureimg perbi">
                    <img src={team1}  alt="" />
                </div>
                <div className="downadjust">
                <div className="perfeatureheading perb">
                    <h3>JOHN SNOW</h3>
                </div>
                <div className="perfeaturedesc perdb">
                    <p>CEO</p>
                </div>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg perbi">
                    <img src={team2} alt="" />
                </div>
                <div className="downadjust">
                <div className="perfeatureheading perb">
                    <h3>LADY SANSA</h3>
                </div>
                <div className="perfeaturedesc perdb">
                    <p>WebDesigner</p>
                </div>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg perbi">
                    <img src={team3} alt="" />
                </div>
                <div className="downadjust">
                <div className="perfeatureheading perb">
                    <h3>DAVID SMITH</h3>
                </div>
                <div className="perfeaturedesc perdb">
                    <p>Photographer</p>
                </div>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg perbi">
                    <img src={team4} alt="" />
                </div>
                <div className="downadjust">
                <div className="perfeatureheading perb">
                    <h3>LADY SANSA </h3>
                </div>
                <div className="perfeaturedesc perdb">
                    <p>Photographer</p>
                </div>
                </div>
            </div>
        </div>
    </div>    
      
    </>
  )
}

export default Team
