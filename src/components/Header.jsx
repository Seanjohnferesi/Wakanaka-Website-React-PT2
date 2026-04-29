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
                    <li>Home</li>
                    <li onClick={() => navigate("/services")}>Services</li>
                    <li>Gallery</li>
                </ul>
                <button className="book-btn">Book</button>
            </nav>
        </header>
    )
}

export default Header