// app/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// Function to fetch all documents from the /art collection
export const getAllArtDocuments = async () => {
  const artCollectionRef = collection(firestore, "art");
  const querySnapshot = await getDocs(artCollectionRef);

  const artDocuments = [];
  querySnapshot.forEach((doc) => {
    artDocuments.push({ id: doc.id, ...doc.data() });
  });

  return artDocuments;
};

export const addArtDocument = async (
  name,
  description,
  imageUrl,
  size,
  category
) => {
  const artCollectionRef = collection(firestore, "art");

  try {
    const newArtDocRef = await addDoc(artCollectionRef, {
      name,
      description,
      imageUrl,
      size,
      category,
    });

    console.log("Document added with ID:", newArtDocRef.id);
    toast.success("Art added successfully!");
    return newArtDocRef.id; // Return the ID of the newly added document
  } catch (error) {
    console.error("Error adding art document:", error.message);
    toast.error(`Error adding art document: ${error.message}`);
    throw error; // Throw the error for handling in the calling component
  }
};

export const editArtDocument = async (updatedData) => {
  console.log(updatedData);
  const artDocRef = doc(firestore, "art", updatedData.id);

  try {
    await setDoc(artDocRef, updatedData);
    console.log(`Document with ID ${updatedData.id} updated successfully`);
    toast.success("Art updated successfully!");
  } catch (error) {
    console.error("Error updating art document:", error.message);
    toast.error(`Error updating art document: ${error.message}`);
    throw error; // Throw the error for handling in the calling component
  }
};

export const uploadImage = async (file) => {
  try {
    const storageRef = ref(storage, `art_images/${file.name}`);
    await uploadBytes(storageRef, file);

    // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    toast.error(`Error uploading image: ${error.message}`);
    throw error; // Throw the error for handling in the calling component
  }
};

export const deleteArtDocument = async (docId) => {
  const artDocRef = doc(firestore, "art", docId);

  try {
    await deleteDoc(artDocRef);
    console.log(`Document with ID ${docId} deleted successfully`);
    toast.success("Art deleted successfully!");
  } catch (error) {
    console.error("Error deleting art document:", error.message);
    toast.error(`Error deleting art document: ${error.message}`);
    throw error; // Throw the error for handling in the calling component
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully!");
  } catch (error) {
    console.error("Error logging out:", error.message);
    toast.error(`Error logging out: ${error.message}`);
  }
};
