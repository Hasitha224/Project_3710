import "./Window.css";
import Img1 from "../src/Components/c2.webp";
import WindowData from "./Windowdata.js";
import Img2 from "../src/Components/c3.jpg";
import Img3 from "../src/Components/c4.png";

function Window(){
    return(
        <div className="Window">
            <h1> What's New </h1>
            <p>These are the new products that will suit for you</p>
            <div className="windowcard">
                <WindowData
                image={Img1}
                heading = "Raider GE67 HX Light em up"
                text ="El color azul es totalmente representativo en la compañía,
                    mostrando más el precio por la calidad. A ser un centro
                    comercial de venta al por mayor der perfecto para comprar
                    con la familia"
                />,

                <WindowData
                image={Img2}
                heading = "RTX 4090 series Apex of Cooling"
                text ="El color azul es totalmente representativo en la compañía,
                    mostrando más el precio por la calidad. A ser un centro
                    comercial de venta al por mayor der perfecto para comprar
                    con la familia"
                />,

                <WindowData
                image={Img3}
                heading = "AMD RYZEN 7000 SERIES"
                text ="El color azul es totalmente representativo en la compañía,
                    mostrando más el precio por la calidad. A ser un centro
                    comercial de venta al por mayor der perfecto para comprar
                    con la familia"
                />
            </div>
        </div>

        
    );
}

export default Window;