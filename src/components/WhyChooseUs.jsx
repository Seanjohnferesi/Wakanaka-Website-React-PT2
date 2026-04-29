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
                <button>Book</button>
                {/* <div className="delivery-container">
                    <img src={car} alt={car} />
                    <img src={house} alt={house} />
                </div> */}
        </section>
    )
}

export default WhyChooseUs