import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import "./LoginSignin.css";
import { MdEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createSession, verifyAuthentication } from "../../api/sessions";
import { startAuthentication } from "@simplewebauthn/browser";

const LoginSignin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [needsPasskey, setNeedsPasskey] = useState(false);

  const mutation = useMutation({ mutationFn: createSession });

  const onSubmit = async (formData) => {
    try {
      const response = await mutation.mutateAsync({
        email: formData.email,
        otp: formData.otp,
        password: formData.password,
      });

      if (response.needsPasskey) {
        setNeedsPasskey(true);

        const asseResp = await startAuthentication(response.options);

        const authResponse = await verifyAuthentication({
          email: formData.email,
          passkeyResponse: asseResp,
          password: formData.password,
        });

        if (authResponse.created) {
          navigate("/dashboard");
        } else {
          setNeedsPasskey(false);

          throw new Error();
        }
      } else if (response.needsOtp) {
        setShowOtp(true);
      } else if (response.created) {
        navigate("/dashboard");
      }
    } catch (err) {
      const errorMessage = (await err.response?.json())?.message ?? "Login failed – please try again!";
      alert(errorMessage);
    }
  };

  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const canSubmit = !mutation.isPending;

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} className="logo" alt="Seniors Rights Logo" />
        <h1>Log in</h1>
        <p>
          Don't have an account? <Link to="/Signup">Create an account</Link>
        </p>

        {needsPasskey ? (
          <p>Passkey required – please follow your browser's prompts</p>
        ) : (
          <>
            {/* Email Input */}
            <div className="input-box">
              <input type="email" placeholder="Email Address" required {...register("email")} />
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
            {showOtp && (
              <div className="input-box">
                <input type="text" placeholder="OTP" required {...register("otp")} />
                <IoTimer className="icon" />
              </div>
            )}

            {/* Remember Me and Forgot Password */}
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            {/* Submit Button */}
            <button disabled={!canSubmit} type="submit">
              Log In
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginSignin;
