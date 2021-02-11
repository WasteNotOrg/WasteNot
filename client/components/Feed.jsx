import React, { useState, useEffect, useContext } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FeedContext } from "../providers/FeedProvider.jsx";

const Feed = () => {
  // GLOBAL STATE
  const { donatorStatus } = useContext(FeedContext);

  // LOCAL STATE
  const [feedCards, setFeedCards] = useState([]);

  useEffect(() => {
    const optionsObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        donatorStatus,
      }),
    };
    fetch("http://localhost:8080/feed", optionsObj)
      .then((res) => res.json())
      .then((data) => {
        setFeedCards(data);
        console.log("Feedcards:", feedCards);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [donatorStatus]);

  const renderedFeedCards = feedCards.map((card, idx) => (
    <Card key={`card-${idx}`}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={idx}>
          {card.name}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={idx}>
        <Card.Body>
          {card.street_address}
          <br />
          {card.city}
          <br />
          {card.state}
          <br />
          {card.zip_code}
          <br />
          {card.phone}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  ));

  return (
    <div id="accordionCont">
      <Accordion defaultActiveKey="0">{renderedFeedCards}</Accordion>
      { donatorStatus ?  <Link to="/registerform"><Button className="addInventory" variant="primary">Add Inventory</Button></Link> : <div></div>}
    </div>
  );
};

export default Feed;
