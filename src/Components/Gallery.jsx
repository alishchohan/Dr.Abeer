import React from "react";
import styled from "styled-components";
import clinic1 from "../../public/images/clinic-1.png";
import clinic2 from "../../public/images/clinic-2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

function SeeAllIcon() {
  return (
    <Icon>
      <p className="arrow">
        <FaArrowRightLong />
      </p>
      {/* <p className="circle">
        <FaRegCircle />
      </p> */}
    </Icon>
  );
}

const Icon = styled.div`
  p svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    stroke-width: 5px;
    color: #554b44;
    text-align: right;
    border: 1px solid #b7b7b7;
    /* padding: 3px; */
    border-radius: 50%;
  }
`;

export const Gallery = () => {
  return (
    <Div>
      <h2>Gallery</h2>
      <div className="image-container">
        <div className="images">
          <div className="part-1">
            <img src={clinic1} />
            <img src={clinic2} />
          </div>
          <div className="part-2">
            <img src={clinic1} />
            <img src={clinic2} />
          </div>
        </div>
        <p className="more">
          see all <SeeAllIcon />
        </p>
      </div>
    </Div>
  );
};
const Div = styled.div`
  images-container {
    width: 1080px;
    height: 252px;
  }
  h2 {
    color: #646857;
    font-family: "Italiana", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
  }
  .images {
    display: flex;
    /* justify-content: space-between; */

    .part-1 img,
    .part-2 img {
      width: 278px;
      height: 180px;
      border-radius: 15px;
      margin-right: 30px;
    }
  }
  .more {
    color: var(--Brown, #9f7f66);
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    text-transform: capitalize;
  }
`;
