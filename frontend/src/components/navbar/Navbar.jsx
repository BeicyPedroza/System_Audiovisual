import { Link, Outlet } from "react-router-dom";

import Logo from "../../assets/images/Logo";
import Button from "../forms/Button";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="menu flex container">
          <li>
            <Link to="/">
              <Logo size="40px" showText={true} />
            </Link>{" "}
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/reservation">Reserva</Link>
          </li>
          <li>
            <Link to="/login">
              <Button style="wire">Log In</Button>
            </Link>
            ㅤ
            <Link to="/register">
              <Button style="wire">Registrate</Button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
