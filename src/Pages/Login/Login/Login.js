import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import Social from "../Social/Social";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate("/home");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://polar-beyond-45490.herokuapp.com/login",
      { email }
    );

    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const navigateRegister = (event) => {
    navigate("/signup");
  };

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email address");
    }
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-dark text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        Dont you Sign Up yet?{" "}
        <Link
          to="/signup"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Sign Up
        </Link>{" "}
      </p>
      <p>
        Forget Password?{" "}
        <button
          className=" btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <Social></Social>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
