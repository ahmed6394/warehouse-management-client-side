import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Social from "../Social/Social";
import Loading from "../../../Shared/Loading/Loading";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/");
  }
  if (loading || updating) {
    return <Loading></Loading>;
  }
  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, updating });
    alert("Updated profile");
    navigate("/home");
  };
  return (
    <div className="signup-form">
      <h2 style={{ textAlign: "center" }}>Please Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" name="name" id="" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">Accept Terms and Conditions</label>
        <input
          className="w-50 mx-auto btn btn-dark mt-2"
          type="submit"
          value="SignUp"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <Social></Social>
    </div>
  );
};

export default Signup;
