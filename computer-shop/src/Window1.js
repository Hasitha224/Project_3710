import "./Window.css";
import Img1 from "../src/Components/c5.jpg";
import WindowData from "./Windowdata.js";
import Img2 from "../src/Components/c6.jpg";
import Img3 from "../src/Components/c7.jpg";
import Img4 from "../src/Components/c8.jpg";
import Img5 from "../src/Components/c9.jpg";

function Window1(){
    return(
        <div className="Window">
            <h1> Featured Products </h1>
            <p>Most of our users like these prodcuts and features</p>
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
                />,

                <WindowData
                image={Img4}
                heading = "AMD RYZEN 7000 SERIES"
                text ="El color azul es totalmente representativo en la compañía,
                    mostrando más el precio por la calidad. A ser un centro
                    comercial de venta al por mayor der perfecto para comprar
                    con la familia"
                />,

                <WindowData
                image={Img5}
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

export default Window1;