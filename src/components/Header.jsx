import "../styles/header.css";
import webIcon from "../assets/icons/wakanaka-icon.png";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return(
        <header>
            <div className="web-icon">
                <h1>Wakanaka</h1>
                <img src={webIcon} alt={webIcon} />
            </div>

            <nav>
                <ul>
                    <li onClick={() => {
                        navigate("/");
                        document.getElementById("hero-section").scrollIntoView({ behavior: "smooth", block: "start" });
                    }}>Home</li>
                    <li onClick={() => navigate("/services")}>Services</li>
                    <li onClick={() => navigate("/gallery")}>Gallery</li>
                </ul>
                {/* <button className="book-btn">Book</button> */}
                <a href="https://wa.me/message/IEQ7TPG6URGHO1" className="book-btn" target="_blank">Enquire</a>
            </nav>
        </header>
    )
}

export default Header