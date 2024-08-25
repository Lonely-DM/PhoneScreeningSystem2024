import { useMutation } from "@tanstack/react-query";
import React from "react";
import "./LoginSignin.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createSession } from "../../api/sessions";

const LoginSignin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation({ mutationFn: createSession });

  const onSubmit = async (formData) => {
    try {
      await mutation.mutateAsync({
        email: formData.email,
        password: formData.password,
      });

      navigate("/dashboard");
    } catch (err) {
      alert("Login failed – please try again!");
    }
  };

  const canSubmit = !mutation.isPending;

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In</h1>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/Signup">Create an account</Link>
          </p>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Work Email Address" required {...register("email")} />
          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required {...register("password")} />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button disabled={!canSubmit} type="submit">
          Log In
        </button>
        <a href="/">
          <img src={logo} className="Logo"></img>
        </a>
      </form>
    </div>
  );
};

export default LoginSignin;
