import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import "./Reservation.css";

function Reservation() {
  return (
    <section className="login1">
      <div className="container">
        <Link to="/">
          <Logo size="80px" />
        </Link>
        <h1 className="title">
          Reserva en <b>Audio Técnica</b>
        </h1>
        <form className="flex card form">
          <Input>Cédula</Input>
          <Input>Fecha de la reserva</Input>
          <Input>Correo</Input>
          <Input>Lugar y Hora</Input>
          <Input>Equipos a alquilar</Input>
          <Button style="fill">Confirmar reserva</Button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
