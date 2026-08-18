import "../styles/why-choose-us.css"
import car from "../assets/icons/sedan.png"
import house from "../assets/icons/home.png"

function WhyChooseUs () {
    return(
        <section className="mobile-service">
                <h1>We Come To You</h1>
                <h2>We bring our services directly to your doorstep.<br/>
                    Enjoy professional care in the comfort of your home,<br/>
                    without the hassle of traveling.
                </h2>
                <button
                    onClick={() => window.location.href = "https://wa.me/message/IEQ7TPG6URGHO1"}
                >Book</button>
                {/* <div className="delivery-container">
                    <img className="delivery-icon" src={car} alt={car} />
                </div> */}

                <p>Call out fees apply : R200 </p>
                <p>Doubles After 5pm </p>
        </section>
    )
}

export default WhyChooseUs