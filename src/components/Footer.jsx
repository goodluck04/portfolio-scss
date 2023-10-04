import React from "react";
import logo from "../assets/logo.svg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaDiscord }  from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Founder" />

        <h2>Goodluck...</h2>
        <p>If you fail try again, but never fail to try again</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://discord.gg/NQstY9Yp" target={"blank"}>
            <FaDiscord />
          </a>
          <a
            href="https://www.linkedin.com/in/goodluck04"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/goodluck04" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
