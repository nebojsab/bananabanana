import React from "react";
import banana from "../images/banana-logo.svg";

const Header = ({ siteTitle }) => (
  <header>
    <section className="banana--logo">
      <img src={banana} alt="banana" width="200" height="89" />
    </section>
    <section>
      <nav>
        <ul>
          <li>
            <a href="https://www.instagram.com/bananabanana.rs/">instagram</a>
          </li>
          <li>
            <a href="mailto:contact@bananabanana.rs">contact@bananabanana.rs</a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
)

export default Header
