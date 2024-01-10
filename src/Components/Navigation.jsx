import React from "react";
import styled from "styled-components";
import CartLogo from "/images/OutlineIcon.svg?url";
export const Navigation = () => {
  return (
    <Nav>
      <div className="logo">Logo here</div>
      <ul>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SERVICES</li>
        <li>GALLERY</li>
        {/* {CartLogo} */}
      </ul>
    </Nav>
  );
};
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100px;

  padding: 40px 100px;
  flex-shrink: 0;
  align-items: center;
  .logo {
    color: #554b44;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 40px;
  }
  ul li {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
