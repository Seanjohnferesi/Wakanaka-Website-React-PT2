import DropdownColumn from "../components/DropdownColumn";

function Waxing() {
    return(
        <DropdownColumn title="Waxing" >
                <div className="waxing">
                
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

                    <div className="services-and-prices">
                        
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
    )
}

export default Waxing