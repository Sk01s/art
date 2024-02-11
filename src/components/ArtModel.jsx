import { addArtDocument, editArtDocument, uploadImage } from "@/lib/firebase";
import React, { useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import app from "@/app.json";

const ArtModel = ({ showModal, handleClose, card }) => {
  const [name, setName] = useState(card.name || "");
  const [disabled, setDisabled] = useState(false);
  const [description, setDescription] = useState(card.description || "");
  const [size, setSize] = useState(card.size || "");
  const [category, setCategory] = useState(card.category || app.categories[0]);
  const [image, setImage] = useState(card.image || null);
  const [imageUrl, setImageUrl] = useState(card.imageUrl || "");
  const operationType = card ? "Edit" : "Add";

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      console.log(image);
      setImageUrl(""); // Reset imageUrl when a new file is selected
    }
  };

  const handleAddArt = async () => {
    try {
      // Use either the uploaded file or the provided image URL
      const imageUrlValue = await uploadImage(image);
      // Add the art document to Firestore
      await addArtDocument(name, description, imageUrlValue, size, category);

      // Reset form fields or handle success as needed
      setName("");
      setDescription("");
      setSize("");
      setImage(null);
      setImageUrl("");
      setCategory("");
      setDisabled(false);
    } catch (error) {
      console.error("Error adding art document:", error.message);
      setDisabled(false);

      // Handle error as needed
    }
  };
  const handleEditArt = async () => {
    try {
      // // Use either the uploaded file or the provided image URL
      // const imageUrlValue = await uploadImage(image);
      // cons;
      // Add the art document to Firestore
      await editArtDocument({
        name,
        description,
        size,
        category,
        id: card.id,
        imageUrl: card.imageUrl,
      });

      // Reset form fields or handle success as needed
      setName("");
      setDescription("");
      setSize("");
      setImage(null);
      setImageUrl("");
      setCategory("");
      setDisabled(false);
    } catch (error) {
      console.error("Error adding art document:", error.message);
      setDisabled(false);
      // Handle error as needed
    }
  };
  const handleSubmit = async () => {
    setDisabled(true);
    if (operationType === "Add") {
      await handleAddArt();
    } else {
      await handleEditArt();
    }
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{operationType} Art</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {app.categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {card.imageUrl ? (
            <Image
              src={card.imageUrl}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" disabled={disabled} onClick={handleSubmit}>
          {disabled ? (
            <ClipLoader color="#fff" loading={disabled} size={15} />
          ) : (
            operationType
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArtModel;
