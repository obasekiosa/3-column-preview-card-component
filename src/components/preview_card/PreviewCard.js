import "./PreviewCard.scss";
import icon from "../../assets/images/icon-luxury.svg";


const PreviewCard = (props) => {

    if (!props) return null;
    
    const title = (props.title || "").toUpperCase();
    const text = props.text || "";
    const icon = props.icon || "";
    const color = props.color || "transparent";

    const style = {
        backgroundColor: color,
    };
    const buttonStyle = {
        color: color
    };
    return (
        <div className="PreviewCard" style={style}>
            <img src={icon} alt="img"/> 
            <h2>{title}</h2>
            <p>{text}</p>
            <button style={buttonStyle}>Learn More</button>
        </div>
    );
}


export { PreviewCard };