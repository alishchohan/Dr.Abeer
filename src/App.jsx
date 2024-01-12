import { useState } from "react";
import "./App.css";
import { Header } from "./Components/header";
import { Footer } from "./Components/footer/Footer";
import { Gallery } from "./Components/gallery";
import styled from "styled-components";
import MeetDr from "./Components/cards/MeerDr";
import flowers from "../public/images/flowers.png";
import Services from "./Components/cards/ServiesImage";
import OurServices from "./Components/cards/OurServices";

function App() {
  return (
    <Div>
      <Header />
      <main>
        <img src={flowers} alt="flowers image" className="flowers" />
        <div className="color"></div>
        <MeetDr />
        <OurServices />
        <div className="color2"></div>
        <Gallery />
        <Footer />
      </main>
      {/* <Services /> */}
    </Div>
  );
}

export default App;

const Div = styled.div`
  background: linear-gradient(180deg, #f4e5d3 0%, rgba(245, 239, 232, 0) 100%);
  overflow: hidden;
  main {
    padding: 60px 184px;
    position: relative;
    .flowers {
      position: absolute;
      right: 0;
      top: -122px;
      width: 413px;
      height: 275px;
      flex-shrink: 0;
      background-color: f4e5d3;
      mix-blend-mode: multiply;
      z-index: 1;
    }
    .color {
      width: 651.479px;
      height: 651.479px;
      transform: rotate(-15deg);
      flex-shrink: 0;
      border-radius: 651.479px;
      opacity: 0.8;
      background: radial-gradient(
        50% 50% at 50% 50%,
        #aa8b6e 0%,
        rgba(216, 179, 145, 0) 100%
      );
      filter: blur(47px);
      position: absolute;
      top: 50px;
      left: -240px;
    }
    .color2 {
      width: 651.479px;
      height: 651.479px;
      transform: rotate(-15deg);
      flex-shrink: 0;
      border-radius: 651.479px;
      opacity: 0.8;
      background: radial-gradient(
        50% 50% at 50% 50%,
        #aa8b6e 0%,
        rgba(216, 179, 145, 0) 100%
      );
      position: absolute;
      right: -300px;
      top: 700px;
    }
  }
`;
