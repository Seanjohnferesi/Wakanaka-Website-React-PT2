import "../styles/services-section.css"
import nails from "../assets/services-section/nail-care.png"
import spa from "../assets/services-section/spa-treatments.png"
import waxing from "../assets/services-section/waxing.jpg"
import { useNavigate } from "react-router-dom";


function ServicesSection () {
    const navigate = useNavigate();

    return(
        <section className="services-container" id="services-container">
            <h1>Explore Our Services</h1>
            <div className="services">  
                <div className="services-tab">
                    <div className="nail-care">
                        <img src={nails} alt={nails} />
                    </div>
                    <h2 className="names">Nail Care</h2>
                    <button
                        onClick={() => navigate("/nail-care")} 
                    >Explore</button>
                </div>
                
                <div className="services-tab">
                    <div className="spa">
                        <img src={spa} alt={spa} />
                    </div>
                    <h2 className="names">Spa Treatments</h2>
                    <button
                        onClick={() => navigate("/spa-treatments")}
                    >Explore</button>
                </div>

                <div className="services-tab">
                    <div className="waxing-cat">
                        <img src={waxing} alt={waxing} />
                    </div>
                    <h2 className="names">Hair Removal</h2>
                    <button
                        onClick={() => navigate("/waxing")}
                    >Explore</button>
                </div>
            </div>

            <div className="divider"></div>
        </section>
    )
}

export default ServicesSection