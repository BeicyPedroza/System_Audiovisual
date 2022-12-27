import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import "./Register.css";

function Register() {
  return (
    <section className="login1">
      <div className="container">
        <Link to="/">
          <Logo size="80px" />
        </Link>
        <h1 className="title">
          Registrarse en <b>Audio Técnica</b>
        </h1>
        <form className="flex card form">
          <Input>Nombre De Usuario</Input>
          <Input>Telefono</Input>
          <Input>Correo</Input>
          <Input type="password">Contraseña</Input>
          <Input type="password">Confirmar Contraseña</Input>
          <Button style="fill">Registrarme</Button>
        </form>
        <div className="register card">
          <p>
            ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
