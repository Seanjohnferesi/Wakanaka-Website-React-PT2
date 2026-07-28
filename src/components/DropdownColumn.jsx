import { useState } from "react";

function DropdownColumn({title, children}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(prev => !prev);
    }

    return(
        <div
            onClick={handleToggle}
            className={`category ${isVisible ? "open" : ""}`}
        >
            <h2>{title}</h2>
            {isVisible && (
                <div className="listItems">
                    {children}
                </div>
            )}

        </div>
    )
}

export default DropdownColumn