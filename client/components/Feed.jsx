import React, { useState, useEffect, useContext } from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import { FeedContext } from '../providers/FeedProvider.jsx';
import '../public/css/styles.css';

const Feed = () => {
  // GLOBAL STATE
  const { donatorStatus } = useContext(FeedContext);

  // LOCAL STATE
  const [feedCards, setFeedCards] = useState([]);

  // Initially render donators or users in need based on donatorStatus
  useEffect(() => {
    const optionsObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        donatorStatus,
      }),
    };
    fetch('http://localhost:8080/feed', optionsObj)
      .then((res) => res.json())
      .then((data) => {
        setFeedCards(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [donatorStatus]);

  // Conditionally render cards in Accordian component
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
      {/* conditionally render add inventory button depending on user donator status */}
      { donatorStatus ? (
        <Link to="/registerform">
          <Button className="addInventory" variant="primary">Add Inventory</Button>
        </Link>
      )
        : null }
    </div>
  );
};

export default Feed;
