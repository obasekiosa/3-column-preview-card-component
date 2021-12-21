import "./PreviewCard.scss";
import logo from "../../assets/images/icon-luxury.svg";


const PreviewCard = () => {

    const brightYellow = "hsl(31, 77%, 52%)";
    const style = {
        backgroundColor: brightYellow,
    };

    return (
        <div className="PreviewCard" style={style}>
            <img src={logo} alt="img"/> 
            <h2>Sedans</h2>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                or on your next road trip.</p>
            <button>Learn more</button>
        </div>
    );
}


export { PreviewCard };