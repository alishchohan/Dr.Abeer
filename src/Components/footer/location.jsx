import locationIcon from "/Users/admin/Desktop/Doctor/Dr.Abeer/public/images/location.png";
import styled from "styled-components";

export default function Locations() {
  return (
    <Div>
      <div className="component">
        <img src={locationIcon} alt="Location Icon" />
        <p>Bahrainn</p>
      </div>
      <div className="component">
        <img src={locationIcon} alt="Location Icon" />
        <p>Dubai</p>
      </div>
    </Div>
  );
}
const Div = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 34px;
  margin-bottom: 76px;
  .component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
  }
  div img {
    width: 18px;
    height: 18px;
  }
  div p {
    color: #554b44;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
`;
