import "../styles/ServicesPage/separate-services-page.css"

function Waxing() {
    return(
        <section className="category-container waxing-container">
            <h2>Waxing</h2>
                <div className="waxing-flex">

                    <div className="services-and-prices">          
                        <ul>
                            <li>Brow, Lip, Or Chin</li>
                            <li>Ear Or Nose</li>
                            <li>Full Face</li>
                            <li>Under Arm</li>
                            <li>Half Arm</li>
                            <li>Full Arm</li>
                            <li>Garden Path</li>
                            <li>Bikini</li>
                            <li>Brazallian</li>
                            <li>Hollywood</li>
                            <li>Half Leg</li>
                            <li>Full Leg</li>
                        </ul>
                        
                    <ul>
                            <li>R150</li>
                            <li>R150</li>
                            <li>R400</li>
                            <li>R200</li>
                            <li>R300</li>
                            <li>R450</li>
                            <li>R150</li>
                            <li>R400</li>
                            <li>R500</li>
                            <li>R600</li>
                            <li>R350</li>
                            <li>R550</li>
                        </ul>
                    </div>

                    <div className="waxing-men-container">
                        <p className="spa-heads">Men</p>

                        <div className="services-and-prices">
                            
                            <ul>
                                <li>Chest Or Stomach</li>
                                <li>Neck Or Shoulders</li>
                                <li>Half Leg</li>
                                <li>Full Leg</li>
                                <li>Back Wax</li>
                            </ul>
                            
                            <ul>
                                <li>R350</li>
                                <li>R250</li>
                                <li>R450</li>
                                <li>R600</li>
                                <li>R450</li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
            </section>
    )
}

export default Waxing