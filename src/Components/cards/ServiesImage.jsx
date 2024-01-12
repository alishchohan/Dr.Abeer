import React from "react";
import Girl1 from "../../../public/images/girl-1.png";
import Girl2 from "../../../public/images/girl-2.png";
import styled from "styled-components";
function Services() {
  return (
    <Div>
      <div className="image-wrapper-1 ">
        <div className="image-rectangle ">
          <img src={Girl1} alt="girl 1 image" className="image-1" />
        </div>
        <h2>NON - SURGICAL</h2>
      </div>
      <div className="image-wrapper-2">
        <h2>PLASTIC SURGERY</h2>
        <div className="image-rectangle ">
          <img src={Girl2} alt="girl 2 image" className="image-2" />
        </div>
      </div>
    </Div>
  );
}

export default Services;

const Div = styled.div`
  padding: 0px;
  display: flex;
  gap: 25px;
  h2 {
    color: #aba193;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 275;
    line-height: normal;
    text-transform: uppercase;
    margin: 12px;
  }
  .image-wrapper-2 {
    margin-top: 80px;
    /* margin-top: 0px; */
  }
  .image-wrapper-1,
  .image-wrapper-2 {
    position: relative;
    .rect-1 {
      margin-top: 30px;
    }
    .rect-2 {
      margin-top: 100px;
    }
    .image-rectangle {
      background-image: linear-gradient(
        to right,
        #fffdf9,
        rgba(255, 253, 249, 0)
      );
      width: 254px;
      height: 394px;
      flex-shrink: 0;
      border-top-left-radius: 100px;
      border-bottom-right-radius: 100px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      position: relative;
      img {
        position: absolute;
        top: 20px;
        right: 25px;
        width: 240px;
        height: 360px;
        flex-shrink: 0;
        border-top-left-radius: 100px;
        border-bottom-right-radius: 100px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }
  }
`;
