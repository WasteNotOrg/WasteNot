import React, { useState, useEffect } from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';

const Feed = (props) => {
  const [feedCards, setFeedCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/feed')
      .then((res) => res.json())
      .then((data) => {
        setFeedCards(data);
        console.log('Feedcards:', feedCards);
      })
      .catch((err) => { throw new Error(err); });
  });

  const renderedFeedCards = feedCards.map((card, idx) => (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={idx}>
          {card.name}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={idx}>
        <Card.Body>
          {card.street_address}
          {card.city}
          {card.state}
          {card.zip_code}
          {card.phone}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  ));

  return (
    <Accordion defaultActiveKey="0">
      {renderedFeedCards}
    </Accordion>
  );
};

export default Feed;
