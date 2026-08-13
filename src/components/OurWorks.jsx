import pic1 from "../assets/gallery/1.jpg"
import pic2 from "../assets/gallery/2.jpg"
import pic3 from "../assets/gallery/3.jpg"
import pic4 from "../assets/gallery/4.jpg"
import pic5 from "../assets/gallery/5.jpg"
import pic6 from "../assets/gallery/6.jpg"
import pic7 from "../assets/gallery/7.jpg"
import pic8 from "../assets/gallery/8.jpg"
import pic9 from "../assets/gallery/9.jpg"
import pic10 from "../assets/gallery/10.jpg"
import "../styles/our-works.css"


function OurWorks () {
    return(
        <section className="our-works-container">
            <h1>Our Works</h1>
            <div className="carousel">
                 <div className="group">
                    <div className="pics"><img src={pic1} alt="Work 1" /></div>
                    <div className="pics"><img src={pic2} alt="Work 2" /></div>
                    <div className="pics"><img src={pic3} alt="Work 3" /></div>
                    <div className="pics"><img src={pic4} alt="Work 4" /></div>
                    <div className="pics"><img src={pic5} alt="Work 5" /></div>
                    <div className="pics"><img src={pic6} alt="Work 6" /></div>
                    <div className="pics"><img src={pic7} alt="Work 7" /></div>
                    <div className="pics"><img src={pic8} alt="Work 8" /></div>
                    <div className="pics"><img src={pic9} alt="Work 9" /></div>
                    <div className="pics"><img src={pic10} alt="Work 10" /></div>
            
                    <div className="pics"><img src={pic1} alt="Work 1" /></div>
                    <div className="pics"><img src={pic2} alt="Work 2" /></div>
                    <div className="pics"><img src={pic3} alt="Work 3" /></div>
                    <div className="pics"><img src={pic4} alt="Work 4" /></div>
                    <div className="pics"><img src={pic5} alt="Work 5" /></div>
                    <div className="pics"><img src={pic6} alt="Work 6" /></div>
                    <div className="pics"><img src={pic7} alt="Work 7" /></div>
                    <div className="pics"><img src={pic8} alt="Work 8" /></div>
                    <div className="pics"><img src={pic9} alt="Work 9" /></div>
                    <div className="pics"><img src={pic10} alt="Work 10" /></div>
                </div>
            </div>
            
        </section>
    )
}

export default OurWorks 