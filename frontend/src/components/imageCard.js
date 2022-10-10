import React from "react";
import { Card, Button } from "react-bootstrap";

const ImageCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1503525523076-ca4aa2e47535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjY3OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjUzNjAyOTE&ixlib=rb-1.2.1&q=80&w=400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
