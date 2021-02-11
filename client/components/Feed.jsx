import React, { useState, useEffect, useContext } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { FeedContext } from '../providers/FeedProvider';

const Feed = (props) => {
  // GLOBAL STATE
  const { isDonating } = useContext(FeedContext);

  // LOCAL STATE
  const [feedCards, setFeedCards] = useState([]);
  const [initialCallMade, setInitialCallMade] = useState(false); // TODO: Check this line later on

  useEffect(() => {
    setInitialCallMade(true);
    fetch("http://localhost:8080/feed")
      .then((res) => res.json())
      .then((data) => {
        setFeedCards(data);
        console.log("Feedcards:", feedCards);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [initialCallMade]);

  const renderedFeedCards = feedCards.map((card, idx) => (
    <Card key={idx}>
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
    </div>
  );
};

export default Feed;
