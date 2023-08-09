import Titulo from "./Titulo";
import Cards from "./Cards";
import BasicPagination from "./BasicPagination";
import Footer from "./Footer";
import foto8 from "./imagenes/foto8.jpg"
import foto6 from "./imagenes/foto6.jpg"
import Compras from "./Compras";
function List_2() {
    return (
        <div>
          
          <Titulo/>
          <Compras/>
          <div className="container mx mt-3">
            <div className="row">
              <div className="col-md-4">
                <Cards
                  imageUrl={foto6}
                  tittle="Torta Suiza"
                  body="Un helado ideal para esas personas"
                  texto="Torta Suiza"
                  precio="5.90"
                  imagen={foto6} />
              </div>
              <div className="col-md-4">
                <Cards
                  imageUrl={foto8}
                  tittle="Corneto"
                  body="Un helado ideal para esas personas"
                  texto="Corneto"
                  precio="6.80"
                  imagen={foto8}/>
              </div>
              
            
            </div>
           
          </div>
          <BasicPagination
          element2="active"/>
          <Footer/>
        </div>
      );
    }

export default List_2