import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";

import "./Login.css";

function Login() {
  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo size="100px" />
        </Link>
        <h1 className="title"><b>Iniciar Sesión</b></h1>
        <p>¡Que gusto verte!</p>
        <form className="flex card form">
          <Input>Usuario</Input>
          <Input type="password">Contraseña</Input>
          <Button style="fill">Iniciar Sesión</Button>
        </form>
        <div className="register card">
          <p>
            ¿Eres Nuevo? <Link to="/register">Crea una cuenta</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
