import "./PreviewCard.scss";
import logo from "../../assets/images/icon-luxury.svg";


const PreviewCard = () => {

    const brightYellow = "hsl(31, 77%, 52%)";
    const style = {
        backgroundColor: brightYellow,
    };

    const buttonStyle = {
        color: brightYellow
    };
    return (
        <div className="PreviewCard" style={style}>
            <img src={logo} alt="img"/> 
            <h2>{"Sedans".toUpperCase()}</h2>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                or on your next road trip.</p>
            <button style={buttonStyle}>Learn More</button>
        </div>
    );
}


export { PreviewCard };