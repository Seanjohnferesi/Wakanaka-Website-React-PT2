import "../styles/services-section.css"

function ServicesSection () {
    return(
        <section className="services-container">
            <h1>Explore Our Services</h1>
            <div className="services">  
                <div className="services-tab">
                    <div className="nail-care"></div>
                    <h2 className="names">Nail Care</h2>
                    <button>Explore</button>
                </div>
                
                <div className="services-tab">
                    <div className="spa"></div>
                    <h2 className="names">Spa Treatments</h2>
                    <button>Explore</button>
                </div>

                <div className="services-tab">
                    <div className="add-on"></div>
                    <h2 className="names">Add Ons</h2>
                    <button>Explore</button>
                </div>
            </div>

            <div className="divider"></div>
        </section>
    )
}

export default ServicesSection