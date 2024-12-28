import Logo from "../assets/logo.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import PinterestIcon from "../assets/icon-pinterest.svg";
import InstagramIcon from "../assets/icon-instagram.svg";

export function Footer() {
  return (
    <footer className="primary-footer padding-block-700 bg-neutral-900 text-neutral-100">
      <div className="container">
        <div className="primary-footer-wrapper">
            <a className="primary-footer-logo" href="#" aria-label="home">
              <img src={Logo} alt="Manage" className="footer-logo" />
            </a>
            <ul className="social-list" role="list" aria-label="Social links">
              <li><a href=""><img className="social-icon" src={FacebookIcon} alt="icon-facebook" /></a></li>
              <li><a href=""><img className="social-icon" src={YoutubeIcon} alt="icon-youtube" /></a></li>
              <li><a href=""><img className="social-icon" src={TwitterIcon} alt="icon-twitter" /></a></li>
              <li><a href=""><img className="social-icon" src={PinterestIcon} alt="icon-pinterest" /></a></li>
              <li><a href=""><img className="social-icon" src={InstagramIcon} alt="icon-instagram" /></a></li>

            </ul>
      
          <div className="primary-footer-nav">
            <nav className="footer-nav">
              <ul role="list" aria-label="footer" data-spacing="tight" className="flow">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </nav>
          </div>
        
            <form action="" className="primary-footer-form">
              <input type="mail" />
              <button className="button" data-shadow="none">Go</button>
             
            </form>
            <p className="primary-footer-copyright">Copyright 2024. All Rights Reserved</p>
     
            
        </div>
        <div className="attribution | mx-auto">
            <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p>
            <p>Coded by <a href="https://github.com/santanavanessa" target="_blank">Vanessa Santana</a></p>
            </div>
      </div>
    </footer>
  )
}