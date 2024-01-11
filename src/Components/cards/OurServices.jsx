import React from "react";
import styled from "styled-components";
import Services from "./ServiesImage";
export default function OurServices() {
  return (
    <Container>
      <div className="text-box">
        <h3>SERVICES</h3>
        <h2>Our Services.</h2>
        <p>
          Are you interested in improving your appearance but don’t know where
          to begin? You’re not alone. That’s why we offer confidential cosmetic
          consultations. Learn in person what all your options are for your
          unique beauty desires, and have all your questions answered in the
          comfort of the Dr. Abeer Alkobaisi Cosm Plastic atmosphere, either in
          Bahrain or Dubai.
        </p>
        <a href="">
          Learn more <span>&rarr;</span>
        </a>
      </div>
      <div className="image-box">
        <Services />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 1240px;
  height: 626px;
  flex-shrink: 0;
  /* justify-content: space-between; */
  display: flex;
  align-items: center;
  border-radius: 80px;
  background: linear-gradient(180deg, #f4e5d3 0%, rgba(245, 239, 232, 0) 100%);
  margin: 20px auto;
  position: relative;
  z-index: 0;

  .text-box {
    padding: 7.8rem;
    h3 {
      color: var(--Grey, #888);
      font-size: 16px;
      font-style: normal;
      font-weight: 275;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    h2 {
      color: var(--Green, #646857);

      /* 50 Italiana */
      font-family: Italiana;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 48px;
    }
    p {
      color: var(--Grey, #888);
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 130% */
      /* margin-bottom: 24px; */
    }
    a {
      color: var(--Brown, #9f7f66);
      text-decoration: none;
      /* font-family: Gotham; */
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 137.5% */
      span {
        width: 18px;
        height: 18px;
      }
    }
  }
  .image-box {
    padding-right: 70px;
  }
`;
