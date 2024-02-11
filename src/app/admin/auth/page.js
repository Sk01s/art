// components/Login.js
"use client";
import { useEffect, useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is not authenticated, redirect to /auth
        router.push("/admin/dashboard");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login starts

    try {
      if (!email || !password)
        return setError("email or password can't be empty");
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      router.push("/admin/dashboard");
      setError(null); // Reset error state on successful login
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false when login completes (regardless of success or failure)
    }
  };

  return (
    <Container>
      <br />
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button
          variant="primary"
          type="submit"
          onClick={handleLogin}
          disabled={loading} // Disable the button while loading
        >
          {loading ? (
            <ClipLoader
              color="#fff"
              loading={loading}
              css={override}
              size={15}
            />
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
