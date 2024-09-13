import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { createUser } from "../../api/users";
import "./Signup.css";
import logo from "../Assets/logo.png";

const Signup = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation({ mutationFn: createUser });

  const onSubmit = async (formData) => {
    try {
      await mutation.mutateAsync({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.mobile,
        role: formData.role,
        employeeId: formData.employeeId,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      navigate("/setup-mfa");
    } catch (err) {
      const response = await err.response?.json();
      alert("There was an issue creating the user: " + (response?.message ?? "N/A"));
    }
  };

  const canSubmit = watch("agreeToTerms") && !mutation.isPending;

  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <a href="/">
          <img src={logo} alt="SRV Logo" />
        </a>
        {/* Sign Up Heading */}
        <h1>Create Your Account</h1>

        {/* Inputs and Details Users Must Input Within the Page */}

        <input type="text" className="input-box" placeholder="Enter Your First Name" {...register("firstName")} />
        <input type="text" className="input-box" placeholder="Enter Your Last Name" {...register("lastName")} />
        <input type="tel" className="input-box" placeholder="Enter Your Phone Number" {...register("mobile")} />
        <input type="email" className="input-box" placeholder="Enter Your Work Email Address" {...register("email")} />
        <input type="text" className="input-box" placeholder="Enter Your Job Position" {...register("role")} />
        <input type="text" className="input-box" placeholder="Enter Your Employee ID" {...register("employeeId")} />
        <input type="password" className="input-box" placeholder="Create a Password" {...register("password")} />
        <input
          type="password"
          className="input-box"
          placeholder="Confirm Your Password"
          {...register("confirmPassword")}
        />
        {/* Acknowledgement of T&C's As well as Privacy Policies */}
        <p className="checkbox-text">
          <label>
            <input type="checkbox" {...register("agreeToTerms")} /> By Signing Up, You are Agreeing to Senior Rights
            Victoria's Terms of Use and Privacy Policies
          </label>
        </p>
        {/* Usable Sign-Up Button */}
        <button disabled={!canSubmit} type="submit" className="sign-btn">
          Sign Up
        </button>
        {/* Prompt if User Already Has an Account */}
        <p className="login-link">
          Already Have an Account?{" "}
          <Link to="/login" className="login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
