// components/PrivateRoute.js
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, deleteArtDocument, getAllArtDocuments } from "@/lib/firebase";
import { Button, Card, Container } from "react-bootstrap";
import ArtModel from "@/components/ArtModel";
import ArtCard from "@/components/ArtCard";
import { ClipLoader } from "react-spinners";

const Dashboard = () => {
  const router = useRouter();
  const [artDocuments, setArtDocuments] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(() => true);
  const [card, setCard] = useState(false);

  useEffect(() => {
    const fetchArtDocuments = async () => {
      try {
        const documents = await getAllArtDocuments();
        setArtDocuments(documents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching art documents:", error.message);
      }
    };

    fetchArtDocuments();
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) {
        // User is not authenticated, redirect to /auth
        router.push("/admin/auth");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [router]);

  const handleDelete = (id) => {
    // Handle delete functionality (you can implement as needed)
    deleteArtDocument(id);
    setArtDocuments((artArr) => artArr.filter((art) => art.id !== id));
  };

  const handlePopup = (type, data) => {
    // Handle opening the popup
    if (type === "Add") {
      setCard(false);
    } else {
      setCard(data);
    }
    setShowModal(true);
  };

  const handleClose = () => {
    // Handle closing the popup
    setShowModal(false);
  };

  return (
    <Container>
      <br />
      <h1 style={{ textAlign: "center" }}>Art Gallery</h1>
      <Button variant="primary" onClick={() => handlePopup("Add")}>
        Add Art
      </Button>

      <div className="d-flex flex-wrap justify-content-around mt-4">
        {artDocuments.length === 0 ? (
          <>
            <ClipLoader loading={loading} size={50} />
          </>
        ) : (
          artDocuments.map((art) => (
            <ArtCard
              key={art}
              art={art}
              handleDelete={handleDelete}
              handlePopup={handlePopup}
            />
          ))
        )}
      </div>

      <ArtModel
        key={card}
        handleClose={handleClose}
        showModal={showModal}
        card={card}
      />
    </Container>
  );
};

export default Dashboard;
