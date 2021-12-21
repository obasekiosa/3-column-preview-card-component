import "./attribution.scss"


const AttributeCard = (props) => {

    if (!props) {
        return null;
    }

    return (
        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
            Coded by <a href={props.url || "#" } target="_blank" rel="noreferrer">{props.name || ""}</a>.
        </div>
    );
}


export { AttributeCard };