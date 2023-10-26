import "./Footer.scss";
import Logo from "../../assets/images/logo-white.svg";
import IconEmail from "../../assets/icons/icon-email.svg";
import IconPhone from "../../assets/icons/icon-phone.svg";
import IconFacebook from "../../assets/icons/icon-facebook.svg";
import IconInstagram from "../../assets/icons/icon-instagram.svg";
import IconTwitter from "../../assets/icons/icon-Twitter.svg";
import BgFooterMobile from "../../assets/images/backgrounds/bg-footer-top-mobile.svg";
/* import BgFooterDesktop from "../../assets/images/backgrounds/bg-footer-top-desktop.svg"; */

function Footer() {
  return (
    <div className="container-footer">
      <img src={BgFooterMobile} alt="Image footer" />
      <div className="footer">
        <div className="footer__newsletter">
          <h3>NEWSLETTER</h3>
          <span>
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </span>
          <div className="input-bottom">
            <input className="input-bottom__i" />
            <button className="input-bottom__b">Subscribe</button>
          </div>
        </div>
        <div className="contact-us">
          <img src={Logo} alt="Logo" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </span>
          <div className="contact-us__info">
            <div className="contact-us__info--i">
              <img src={IconPhone} alt="Icon phone" />
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div className="contact-us__info--i">
              <img src={IconEmail} alt="Icon email" />
              <span>example@huddle.com</span>
            </div>
          </div>
          <div className="contact-us__icons">
            <img src={IconFacebook} alt="Icon facebook" />
            <img src={IconInstagram} alt="Icon instagram" />
            <img src={IconTwitter} alt="Icon twitter" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
