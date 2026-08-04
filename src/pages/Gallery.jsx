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
import "../styles/gallery.css"

function Gallery() {
    return(
        <div className="gallery-container">
            <h1>Gallery</h1>
            <p>Check out some of our work below!</p>

            <div className="pictures-container">
                <img src= {pic1} alt="nail-care" />
                <img src= {pic2} alt="nail-care" />
                <img src= {pic3} alt="nail-care" />
                <img src= {pic4} alt="nail-care" />
                <img src= {pic5} alt="nail-care" />
                <img src= {pic6} alt="nail-care" />
                <img src= {pic7} alt="nail-care" />
                <img src= {pic8} alt="nail-care" />
                <img src= {pic9} alt="nail-care" />
                <img src= {pic10} alt="nail-care" />
            </div>
        </div>
        
    )
}
export default Gallery
        