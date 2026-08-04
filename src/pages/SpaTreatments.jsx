import DropdownColumn from "../components/DropdownColumn";

function SpaTreatments() {
    return(
        <DropdownColumn title="Spa Treatments" >
                <div className="spa-treatments">
                    <p className="spa-heads">Massages</p>

                    <div className="services-and-prices">
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
                    
                    <p className="spa-heads">Facials</p>

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
            </DropdownColumn>
    )
}

export default SpaTreatments