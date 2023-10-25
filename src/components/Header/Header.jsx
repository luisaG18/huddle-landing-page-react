import "./Header.scss";
import Logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="Image of logo" />
        <button className="button-header">Try It Free</button>
      </div>
    </>
  );
}

export default Header;
