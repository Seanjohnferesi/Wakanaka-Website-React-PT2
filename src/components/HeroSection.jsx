import "../styles/hero-section.css"
import heroImage from "../assets/hero-section/hero-image.png";

function HeroSection () {
    return(
        <div className="hero-section">
            <div className="slogan">
                <h2>Expert Care in the <br/> Cormfort of Your Home</h2>
                <p>A full studio experience dedicated to <br /> comfort, confidence, and natural beauty.</p>
                <button className="explore-btn">Explore</button>
            </div>

            <div className="hero-image">
                <img src={heroImage} alt={heroImage} />
            </div>
        </div>
    )
}

export default HeroSection