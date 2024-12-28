import React from "react";
import { FaAirbnb } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-neutral text-primary-content footer-center">
      <div>
        <FaAirbnb className="w-10 h-10" />

        <p>
          Copyright &copy; {footerYear} All rights reserved by{" "}
          <a
            href="https://github.com/iamtheasad"
            target="_blank"
            className="font-bold"
            rel="noreferrer"
          >
            Rana
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
