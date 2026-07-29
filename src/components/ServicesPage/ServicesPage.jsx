import { useState } from "react"
import "../../styles/ServicesPage/services-categories.css"
import DropdownColumn from "../DropdownColumn"
function ServiceCategory (){
    const [isVisible, setIsVisible] = useState(false)
    const handleToggle = () => {
        setIsVisible(prev => !prev)
    }

    return(
        <section className="categories">
            <h1>Services</h1>

            <DropdownColumn title="Nail Care">
                <ul>
                    <li>Full Manicure</li>
                    <li>Full Pedicure</li>
                    <li>Mini Manicure</li>
                    <li>Mini Pedicure</li>
                    <li>Gel Application</li>
                    <li>Gel Manicure</li>
                    <li>Gel Pedicure</li>
                    <li>Gel Soak Off</li>
                    <li>Gel Overlay</li>
                    <li>Soft Gel Tips</li>
                    <li>Soft Gel Tips XL</li>
                    <li>Builders Gel</li>
                    <li>Refill</li>
                    <li>Repair Per Nail</li>
                    <li>Add On Footlogix Treatment</li>
                </ul>

                <ul>
                    <li>R350</li>
                    <li>R400</li>
                    <li>R230</li>
                    <li>R250</li>
                    <li>R350</li>
                    <li>R400</li>
                    <li>R500</li>
                    <li>R100</li>
                    <li>R600</li>
                    <li>R500</li>
                    <li>R550</li>
                    <li>R600</li>
                    <li>R300</li>
                    <li>R50</li>
                    <li>R200</li>
                </ul>
            </DropdownColumn>
     
            <DropdownColumn title="Spa Treatments">
                <ul>
                    <p className="spa-heads">Massages</p>
                    <li>30 Minutes Massage</li>
                    <li>60 Minutes Massage</li>
                    <li>90 Minutes Massage</li>
                    <p className="add-on">Add-on From: </p>

                    <br />

                    <p className="spa-heads">Facials</p>
                    <li>Guinot | 30 Minutes</li>
                    <li>Guinot | 45 Minutes - 1 Hour</li>

                    <br />

                    <p className="spa-heads">Tinting</p>
                    <li>Brow</li>
                    <li>Lash</li>
                </ul>

                <ul>
                    <br />
                    <li>R380</li>
                    <li>R800</li>
                    <li>R1100</li>
                    <li>R100</li>

                    <br />

                    
                </ul>

                
            </DropdownColumn>

            <DropdownColumn title="Waxing">
                <div className="waxing">
                
                    <div className="service-names">          
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
                            <li>R100</li>
                            <li>R130</li>
                            <li>R300</li>
                            <li>R150</li>
                            <li>R200</li>
                            <li>R280</li>
                            <li>R120</li>
                            <li>R280</li>
                            <li>R320</li>
                            <li>R360</li>
                            <li>R240</li>
                            <li>R350</li>
                        </ul>
                    </div>

                    <p className="spa-heads">Men</p>

                    <div className="prices">
                        
                        <ul>
                            <li>Chest Or Stomach</li>
                            <li>Neck Or Shoulders</li>
                            <li>Half Leg</li>
                            <li>Full Leg</li>
                            <li>Back Wax</li>
                        </ul>
                        
                        <ul>
                            <li>R380</li>
                            <li>R300</li>
                            <li>R250</li>
                            <li>R290</li>
                            <li>R390</li>
                        </ul>
                    </div>
                </div>
            </DropdownColumn>
        </section>
    )
}
export default ServiceCategory