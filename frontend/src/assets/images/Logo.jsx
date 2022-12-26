import "./Logo.css";
import logo from "./Logo.png";

function Logo(props) {
  const { size, showText } = props;

  const style = {
    width: size,
    height: size,
  };

  return (
    <div className="flex logo">
      <img src={logo} style={style}></img>
      {showText ? <h3>Audio Técnica</h3> : null}
    </div>
  );
}

export default Logo;
