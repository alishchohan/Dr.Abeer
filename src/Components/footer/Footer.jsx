import React from "react";
import styled from "styled-components";
import Locations from "./location.jsx";
import Contact from "./contact";
import { Copyright } from "./Copyright.jsx";

export const Footer = () => {
  return (
    <Div>
      <h2 className="contact">CONTACT US</h2>
      <Contact />
      <h2 className="location">locations</h2>
      <Locations />
      <Copyright />
    </Div>
  );
};

const Div = styled.div`
  padding: 60px 184px;
  background: #fff;
  height: 550px;

  h2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 275;
    line-height: normal;
    text-transform: uppercase;
  }
  .contact {
    margin-bottom: 4.4rem;
  }
  .location {
    margin: 4.2rem 0;
  }
`;
