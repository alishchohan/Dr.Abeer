import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React from "react";

export const Copyright = () => {
  return (
    <Container>
      <p>2023 Dr. Abeer Clinic. All Rights Reserved M.O.H. - RM 98419</p>
      <div className="icons">
        <li>
          <BsInstagram />
          <FaFacebookF />
          <FaTwitter />
        </li>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  align-items: center;
  p {
    color: #554b44;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 185.714% */
  }
  .icons {
    display: flex;
    gap: 8px;
    li {
      list-style: none;
    }
    li svg {
      height: 40px;
      width: 40px;
      border: 5px solid #554b44;
      background-color: #554b44;
      color: white;
      border-radius: 8px;
      margin: 8px;
    }
  }
`;
