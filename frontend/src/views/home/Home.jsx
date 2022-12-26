import Button from "../../components/forms/Button";
import GridColumn from "../../components/GridColumn";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <section className="header">
      <div className="grid container">
        <GridColumn className="headline" column="1 / span 2">
          <div className="main-headline">
            <p className="title">Sistemas Profesionales</p>
            <p className="content">EL SISTEMA IDEAL PARA TUS EVENTOS</p>
          </div>
          <p className="supp-headline">
            Edición digital <br />
            Instalación <br />
            Transcripción <br />
            Alquiler y venta.
          </p>
        </GridColumn>
      </div>
    </section>
  );
}

export default Home;
