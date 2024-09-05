import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import "./LoginSignin.css";
import { MdEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createSession } from "../../api/sessions";

const LoginSignin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: createSession });

  const [showPassword, setShowPassword] = useState(false);

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

  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} className="logo" alt="Seniors Rights Logo" />
        <h1>Log in</h1>
        <p>
          Don't have an account? <Link to="/Signup">Create an account</Link>
        </p>

        {/* Email Input */}
        <div className="input-box">
          <input
            type="email"
            placeholder="Email Address"
            required
            {...register("email")}
          />
          <MdEmail className="icon" />
        </div>

        {/* Password Input */}
        <div className="input-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            {...register("password")}
          />
          <FaLock className="icon" />
          <span className="toggle-password" onClick={togglePassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        {/* Submit Button */}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginSignin;

