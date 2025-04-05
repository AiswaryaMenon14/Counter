import React from "react";
import "../App.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-social">
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-google"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © 2025 Copyright:{" "}
            <a href="https://counterapp.com" target="_blank" rel="noreferrer">
              counterapp.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
