import React from "react";
import { Navigation } from "./Navigation.JSX";
import styled from "styled-components";
// import women from "/public/images/wepik-export-20230523151449RUtr 1.png";
export const Header = () => {
  return (
    <>
      <Navigation />
      <Headr />
    </>
  );
};

const Headr = styled.div`
  background: url("/public/images/Hero 1.png");
  height: 789px;
  width: 100vw;
  background-color: linear-gradient(#f6f0e9, #f4ece4);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
`;
