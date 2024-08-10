import React, { useEffect, useState } from "react";
import "./Login.css";
import { set, useForm } from "react-hook-form";
const Login = ({ login, setLogin }) => {
  const [currState, setCurrState] = useState("Sign In");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmitHandler = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Succesfully");
    } catch (error) {
      setError("root", "Email is already taken");
    }
  };

  useEffect(() => {
    // Add the no-scroll class to body when the component mounts
    document.body.classList.add("no-scroll");

    // Remove the no-scroll class from body when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
        <div className="login-top">
          <h1>{currState}</h1>
          <i
            onClick={() => setLogin(false)}
            className="fa-regular fa-circle-xmark"
          ></i>
        </div>
        <div className="login-inputs">
          {currState === "Sign In" ? (
            <></>
          ) : (
            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="Your name"
            />
          )}

          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                }
                return true;
              },
            })}
            id="email"
            type="email"
            placeholder="Your email"
          />
          {errors.email && (
            <div className="error-text">{errors.email.message}</div>
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: 8,
            })}
            id="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <div className="error-text">{errors.password.message}</div>
          )}
        </div>

        <button disabled={isSubmitting} type="submit" className="login-btn">
          {currState === "Sign In"
            ? `${isSubmitting ? "Loading..." : "Login"}`
            : `${isSubmitting ? "Loading..." : "Create account"}`}
        </button>
        <div className="login-bottom">
          <div className="login-privacy">
            <input className="checkbox" type="checkbox" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currState === "Sign In" ? (
            <p className="new-account">
              Create a new account
              <span onClick={() => setCurrState("Sign Up")}> Click here</span>
            </p>
          ) : (
            <p className="new-account">
              Already have an account?
              <span onClick={() => setCurrState("Sign In")}> Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
