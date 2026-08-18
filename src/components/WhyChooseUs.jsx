import "../styles/why-choose-us.css"
import door from "../assets/our-works/door.jpg"
import mani from "../assets/our-works/mani.jpg"

function WhyChooseUs () {
    return(
        <section className="mobile-service">
            <img src={door} alt="door" />
            <div className="mobile-service-container">
                <h1>We Come To You</h1>
                <h2>We bring our services directly to your doorstep.<br/>
                    Enjoy professional care in the comfort of your home,<br/>
                    without the hassle of traveling.
                </h2>
                <button
                    onClick={() => window.location.href = "https://wa.me/message/IEQ7TPG6URGHO1"}
                >Book</button>

                <p>Call out fees apply : R200 </p>
                <p>Doubles After 5pm </p>
            </div>

            <img src={mani} alt="mini" />

                
        </section>
    )
}

export default WhyChooseUs