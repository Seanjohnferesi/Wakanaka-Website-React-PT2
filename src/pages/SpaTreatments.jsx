import DropdownColumn from "../components/DropdownColumn";

function SpaTreatments() {
    return(
        <section className="category-container">
            <h2>Spa Treatments</h2>
            <div className="spa-treatments-container" >
                
                <div className="massage-container">
                    <p className="spa-heads" >Massages</p>

                    <div className="services-and-prices" >
                        <ul>
                            <li>30 Minutes Massage</li>
                            <li>60 Minutes Massage</li>
                            <li>90 Minutes Massage</li>
                            <p className="add-on">Add-on From: </p>
                        </ul>

                        <ul>
                            <li>R380</li>
                            <li>R800</li>
                            <li>R1100</li>
                            <li>R100</li>
                        </ul>
                    </div>
                </div>
                
                <div className="facials-container">
                    <p className="spa-heads" >Facials</p>

                    <div className="services-and-prices">
                        <ul>
                            <li>Guinot | 30 Minutes</li>
                            <li>Guinot | 45 Minutes - 1 Hour</li>
                        </ul>

                        <ul>
                            <li>R550</li>
                            <li>R800</li>
                        </ul>
                    </div>
                </div>
                
                <div className="tinting-container">
                    <p className="spa-heads">Tinting</p>
                    <div className="services-and-prices">
                        <ul>
                            <li>Brow</li>
                            <li>Lash</li>
                        </ul>

                        <ul>
                            <li>R150</li>
                            <li>R200</li>
                        </ul>
                    </div>
                </div>                  
            </div>
        </section>
    )
}

export default SpaTreatments