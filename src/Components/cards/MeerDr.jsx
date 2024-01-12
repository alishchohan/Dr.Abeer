import React from "react";
import DrAbeer from "../../../public/images/DrAbeer.png";
import styled from "styled-components";

export default function MeetDr() {
  return (
    <Container>
      <div className="image-box">
        <img src={DrAbeer} alt="Dr Abeer image" />
      </div>
      <div className="text-box">
        <h3>who I am</h3>
        <h2>Meet Dr. Abeer.</h2>
        <p>
          A perfectionist by nature, Dr. Abeer is 100% focused in all that she
          does and is fully committed to the physical and mental well being of
          her patients. She continually strives to discover new medical
          procedures and technologies. As well as travelling overseas, not only
          to keep up to date with the latest medically reviewed and tested
          products and procedures, she also attends conferences and conducts
          surgeries, which adds formidable expertise and medical knowledge to
          her absolute passion in her chosen field.
        </p>
        <a href="">
          Learn more <span>&rarr;</span>
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 1240px;
  height: 626px;
  flex-shrink: 0;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-radius: 80px;
  background: linear-gradient(180deg, #f4e5d3 0%, rgba(245, 239, 232, 0) 100%);
  margin: 0 auto;
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
  .image-box img {
    display: inline-block;
    padding: 40px;
  }
`;
