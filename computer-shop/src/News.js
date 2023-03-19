import "./News.css";
import NewsImg1 from "../src/Components/c1.jpg";
import NewsImg2 from "../src/Components/c5.jpg";
import NewsImg3 from "../src/Components/c3.jpg";

const News = ()=>{
    return(
        <div className="news">
            <h1> Latest News </h1>
            <p> El color azul es totalmente representativo en la compañía,
                mostrando más el precio por la calidad. A ser un centro
                comercial de venta al por mayor der perfecto para comprar
                con la familia’
            </p> 

            <div className="first-news">
                <div className="news-text">
                  <h2>MSI MAKES REVOLUTION IN THE INDUSTRY</h2>  
                  <p> El color azul es totalmente representativo en la compañía,
                      mostrando más el precio por la calidad. A ser un centro
                      comercial de venta al por mayor der perfecto para comprar
                      con la familiaEl color azul es totalmente representativo en la compañía,
                      mostrando más el precio por la calidad. A ser un centro
                      comercial de venta al por mayor der perfecto para comprar
                      con la familiaEl color azul es totalmente representativo en la compañía,
                      mostrando más el precio por la calidad. A ser un centro
                      comercial de venta al por mayor der perfecto para comprar
                      con la familiaEl color azul es totalmente representativo en la compañía,
                      mostrando más el precio por la calidad. A ser un centro
                      comercial de venta al por mayor der perfecto para comprar
                      con la familia
                  </p>
                </div>
                <div className="image">
                    <img alt="img" src={NewsImg1} />
                    <img alt="img" src={NewsImg2} />
                    <img alt="img" src={NewsImg3} />
                </div>
            </div>

        </div>




    )
}

export default News;