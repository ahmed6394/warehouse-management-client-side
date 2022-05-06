import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  /*  const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth); */

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  // if(loading || updating){
  //     return <Loading></Loading>
  // }

  // if (user) {
  //  console.log('user', user);
  // }

  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    // await createUserWithEmailAndPassword(email, password);
    // await updateProfile({ displayName: name });
    console.log(email, password);
    navigate("/home");
  };
  return (
    <div className="signup-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
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
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Terms and Conditions
        </label>
        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Register"
        />
      </form>
      {/* <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin> */}
    </div>
  );
};

export default Signup;