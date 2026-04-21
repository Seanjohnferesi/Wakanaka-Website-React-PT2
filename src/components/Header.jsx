import "../styles/header.css";
import webIcon from "../assets/icons/wakanaka-icon.png";

function Header() {
    return(
        <header>
            <div className="web-icon">
                <h1>Wakanaka</h1>
                <img src={webIcon} alt={webIcon} />
            </div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Gallery</li>
                </ul>
                <button className="book-btn">Book</button>
            </nav>
        </header>
    )
}

export default Header