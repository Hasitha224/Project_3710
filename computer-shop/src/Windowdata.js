
import "./Window.css";

function WindowData(props){
    return(
        <div className="w-card">
            <div className="w-image">
                <img src={props.image} alt="img"/>
            </div>
            <h4> {props.heading} </h4>
            <p>{props.text} </p>
        </div>
    );

}

export default WindowData;