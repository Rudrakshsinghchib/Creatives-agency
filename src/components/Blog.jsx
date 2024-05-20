import React from 'react'
import blog1 from "../assets/images/blog1.jpg"
import blog2 from "../assets/images/blog2.jpg"
import blog3 from "../assets/images/blog3.jpg"
import blog4 from "../assets/images/blog4.jpg"

function Blog() {
  return (
    <>
    <div className="outerblog">
        <div className="upperfeature">
            <div className="bigtext big2">
                <h1>B</h1>
            </div>
            <div className="featuredesc fea2">
                <h3>LET'S BLOG</h3>
            </div>
            <div className="blogpunch">
                <p>We love clean design and advanced digital solutions</p>
            </div>
        </div>
        <div className="downfeature">
            <div className="perfeature">
                <div className="perfeatureimg perbi">
                    <img src={blog1} alt="" />
                </div>
                <div className="perfeatureheading perb">
                    <h3>FRESH SUMMER CAMPAIGN</h3>
                </div>
                <div className="perfeaturedesc perdb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, libero? Quam quis numquam, id dolorem quas laudantium ratione doloribus excepturi aut cumque cum, perferendis eum, magnam eveniet non magni.</p>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg perbi">
                    <img src={blog2} alt="" />
                </div>
                <div className="perfeatureheading perb">
                    <h3>FRESH SUMMER CAMPAIGN</h3>
                </div>
                <div className="perfeaturedesc perdb">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro ullam dolorum eaque id distinctio magni ipsum dolor. Iste officiis nulla aspernatur placeat nam dolore perferendis quasi, quisquam similique!</p>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg perbi">
                    <img src={blog3} alt="" />
                </div>
                <div className="perfeatureheading perb">
                    <h3>FRESH SUMMER CAMPAIGN</h3>
                </div>
                <div className="perfeaturedesc perdb">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum sapiente, deserunt quas adipisci asperiores rem veritatis, exercitationem harum assumenda voluptatum ducimus corporis enim sit cum, distinctio cupiditate nemo soluta?</p>
                </div>
            </div>
            <div className="perfeature">
                <div className="perfeatureimg perbi">
                    <img src={blog4} alt="" />
                </div>
                <div className="perfeatureheading perb">
                    <h3>FRESH SUMMER CAMPAIGN</h3>
                </div>
                <div className="perfeaturedesc perdb">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam numquam in, corrupti hic eius! Aliquid ex hic culpa vero suscipit tempore at, non accusantium provident obcaecati eveniet temporibus!</p>
                </div>
            </div>
        </div>
    </div>    

      
    </>
  )
}

export default Blog
