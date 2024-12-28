import { useRef, useEffect } from "react";
import Logo from "../assets/logo.svg";

export function Navbar() {

  // Refs para os elementos
  const primaryHeaderRef = useRef<HTMLElement>(null);
  const navToggleRef = useRef<HTMLButtonElement>(null);
  const primaryNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const primaryHeader = primaryHeaderRef.current;
    const navToggle = navToggleRef.current;
    const primaryNav = primaryNavRef.current;

    if (navToggle && primaryNav && primaryHeader) {
      const handleToggle = () => {
        const isVisible = primaryNav.hasAttribute("data-visible");
        navToggle.setAttribute("aria-expanded", isVisible ? "false" : "true");
        primaryNav.toggleAttribute("data-visible");
        primaryHeader.toggleAttribute("data-overlay");
      };

      navToggle.addEventListener("click", handleToggle);

      return () => {
        navToggle.removeEventListener("click", handleToggle);
      };
    }
  }, []);

  return (
    <header className="primary-header" ref={primaryHeaderRef}>
      <div className="container">
        <div className="nav-wrapper">
          <a href="#">
            <img src={Logo} alt="Manage" />
          </a>
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
            ref={navToggleRef}
          >
            
            <img
              className="icon-close"
              src="images/icon-close.svg"
              alt=""
              aria-hidden="true"
            />
            <span className="visually-hidden">Menu</span>
          </button>
          <nav
            className="primary-navigation"
            id="primary-navigation"
            ref={primaryNavRef}
          >
            <ul aria-label="Primary" role="list" className="nav-list">
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </nav>
          <button className="button cta-nav-button | display-sm-none display-md-inline-flex">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
