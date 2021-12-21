import { useState } from "react";
import "./PreviewCard.scss";

const PreviewCard = (props) => {

    const [hoverState, setHoverState] = useState(false);

    if (!props) return null;
    
    const title = (props.title || "").toUpperCase();
    const text = props.text || "";
    const icon = props.icon || "";
    const color = props.color || "transparent";

    const veryLigthGrey = "hsl(0, 0%, 95%)";

    const style = {
        backgroundColor: color,
    };
    const buttonStyle = {
        color: hoverState ? veryLigthGrey : color,
        border: hoverState ? `2px solid ${veryLigthGrey}` : "none",
        backgroundColor: hoverState ? color : veryLigthGrey
    };
    return (
        <div className="PreviewCard" style={style}>
            <img src={icon} alt="img"/> 
            <h2>{title}</h2>
            <p>{text}</p>
            <button style={buttonStyle} onMouseLeave={() => { setHoverState(false)}} onMouseEnter={() => { setHoverState(true)}}>Learn More</button>
        </div>
    );
}


export { PreviewCard };