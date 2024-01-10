import Bahrain from "/Users/admin/Desktop/Doctor/Dr.Abeer/public/images/Flag-Bahrain 1.png";
import Dubai from "/Users/admin/Desktop/Doctor/Dr.Abeer/public/images/d flag.png";
import styled from "styled-components";
function ContactFunction({ img, number, email }) {
  return (
    <>
      <li>
        <img src={img} />
        <p>{number}</p>
        <p>{email}</p>
      </li>
    </>
  );
}

const ContactArray = [
  {
    img: Bahrain,
    number: "(+973) 17820988",
    email: "marhaba@dr-abeer.com",
  },
  {
    img: Dubai,
    number: "(+971) 45519447",
    email: "hello@dr-abeer.com ",
  },
];
export default function Contact() {
  return (
    <Div>
      <li>
        {" "}
        <ContactFunction {...ContactArray[0]} />
      </li>
      <li>
        {" "}
        <ContactFunction {...ContactArray[1]} />
      </li>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  list-style: none;
  gap: 9.2rem;
  li {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  img {
    width: 43px;
    height: 26px;
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
`;
