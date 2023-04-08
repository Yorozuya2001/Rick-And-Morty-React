import React from "react";
import { GitHub, LinkedIn, StyledDiv, StyledNavLink } from "./style-footer";

const Footer = () => {
  return (
    <StyledDiv>
      <p>Axel Ariel Valiente</p>
      <p>Proyecto Integrador</p>
      <p>SoyHenry 2023</p>
      <div>
        <StyledNavLink to="https://github.com/yorozuya2001" target="_blank">
          <GitHub />
        </StyledNavLink>
        <StyledNavLink
          to="https://www.linkedin.com/in/axel-valiente-a312021b4/"
          target="_blank"
        >
          <LinkedIn />
        </StyledNavLink>
      </div>
    </StyledDiv>
  );
};

export default Footer;
