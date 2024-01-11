import { useState } from "react";
import "./App.css";
import { Header } from "./Components/header";
import { Footer } from "./Components/footer/Footer";
import { Gallery } from "./Components/gallery";
import styled from "styled-components";
import MeetDr from "./Components/cards/MeerDr";
import flowers from "../public/images/flowers.png";

function App() {
  return (
    <Div>
      <Header />
      <main>
        <img src={flowers} alt="flowers image" className="flowers" />
        <MeetDr />
        <Gallery />
        <Footer />
      </main>
    </Div>
  );
}

export default App;

const Div = styled.div`
  background: linear-gradient(180deg, #f4e5d3 0%, rgba(245, 239, 232, 0) 100%);
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
  }
`;
