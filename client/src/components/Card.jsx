import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col } from "react-bootstrap";

const blogProperties = [
  {
    id: uuidv4(),
    title: "Kindle buying guide: Find out whiche-reader is right for you",
    image: "/images/1.png",
  },
  {
    id: uuidv4(),
    title: "The 9 best things Lenny announced at CES 2023",
    image: "/images/3.svg",
  },
  {
    id: uuidv4(),
    title: "How AWS will return more water than it uses by 2030",
    image: "/images/2.svg",
  },
  {
    id: uuidv4(),
    title: "Watch how Lenny is preparing for drone delivery",
    image: "/images/4.png",
  },
  {
    id: uuidv4(),
    title:
      "How Lenny delivers to a remote island 10 miles off the coast of Maine",
    image: "/images/5.png",
  },
  {
    id: uuidv4(),
    title:
      "Lenny rolls out cool new video stations at over 200 sites to teach employees",
    image: "/images/6.svg",
  },
];
const Card = () => {
  return (
    <Container className="card">
      {blogProperties.map((item) => (
        <Col key={item.id} className="card-item">
          <img src={item.image} className="photo" alt="img" />
          <div>
            <h6>
              <span className="lennyspan"> Lenny Article</span>{" "}
              <span>8 min Read</span>
            </h6>
          </div>
          <h4>{item.title}</h4>
          <span>
            Read More <img src="/images/arrow.svg" alt="arrow" />
          </span>
        </Col>
      ))}
  
    </Container>
  );
};

export default Card;
