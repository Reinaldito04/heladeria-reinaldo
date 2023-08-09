
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";
import Titulo from "./components/Titulo";
import foto1 from "./components/imagenes/foto1.jpg"
import foto2 from "./components/imagenes/foto2.jpg"
import foto3 from "./components/imagenes/foto3.jpg"
import foto4 from "./components/imagenes/foto4.jpg"
import foto5 from "./components/imagenes/foto5.jpg"
import foto7 from "./components/imagenes/foto7.jpg"
import Footer from "./components/Footer";
import BasicPagination from "./components/BasicPagination";
import Compras from "./components/Compras";
function App() {
 

  return (
    <div>
      
      <Titulo/>
      <Compras/>
      <div className="container mx mt-3">
        <div className="row">
          <div className="col-md-4">
            <Cards
              imageUrl={foto1}
              tittle="Cocosette"
              body="Un helado ideal para esas personas"
              texto="Helado de Cocosette"
              precio="5.90"
              imagen={foto1} />
          </div>
          <div className="col-md-4">
            <Cards
              imageUrl={foto2}
              tittle="Choco Oreo"
              body="Un helado ideal para esas personas"
              texto="Helado de Choco Oreo"
              precio="6.80"
              imagen={foto2}/>
          </div>
          <div className="col-md-4">
            <Cards
              imageUrl={foto3}
              tittle="Bati Bati"
              body="Un helado ideal para esas personas" 
              texto='Helado de Bati Bati'
              precio="7.80"
              imagen={foto3}/>
          </div>
          <div className="col-md-4 mt-2">
            <Cards
              imageUrl={foto4}
              tittle="Sirop de Fresa"
              body="Un helado ideal para esas personas"
              texto="Sirop de Fresa"
              precio="4.90"
              imagen={foto4}/>
          </div>
          <div className="col-md-4 mt-2">
            <Cards
              imageUrl={foto5}
              tittle="Oreo"
              body="Un helado ideal para esas personas" 
              texto="Helado de Oreo"
              precio="5.50"
              imagen={foto5} />
          </div>
          <div className="col-md-4 mt-2">
            <Cards
              imageUrl={foto7}
              tittle="Ron con pasas"
              body="Un helado ideal para esas personas" 
              texto="Ron con pasas"
              precio="5.80"
              imagen={foto7} />
          </div>
        </div>
       
      </div>
      
      <BasicPagination
      element1="active"/>
      <Footer/>
    </div>
  );
}

export default App;
