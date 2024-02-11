import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ArtCard = ({ art, handlePopup, handleDelete }) => {
  const [loading, setLoading] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);
  return (
    <Card
      key={art.id}
      style={{
        width: "18rem",
        margin: "10px",
        transitionDuration: "1s",
        transitionProperty: "all",
      }}
      onMouseEnter={() => setSelectedArt(art)}
      onMouseLeave={() => setSelectedArt(null)}
    >
      <Card.Img variant="top" src={art.imageUrl} alt={art.name} />
      <Card.Body>
        <Card.Title>{art.name}</Card.Title>
        <Card.Text>{art.description}</Card.Text>
        {selectedArt === art ? (
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="outline-secondary"
              onClick={() => handlePopup("Edit", art)}
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => handleDelete(art.id)}
            >
              Delete
            </Button>
          </div>
        ) : (
          <>
            <br />
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ArtCard;
