import GridColumn from "../../components/GridColumn";
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
          <p className="supp-headline">
            Somos una empresa con experiencia en el alquiler de equipos.
            <br />
            Tenemos a su disposición diferentes sistemas audiovisuales a su
            servicio. <br />
          </p>
        </GridColumn>
      </div>
    </section>
  );
}

export default Home;
