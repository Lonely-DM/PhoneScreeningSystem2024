import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import QRCode from "react-qr-code";

import { setTotp } from "../../api/users";
import { Link, useNavigate } from "react-router-dom";

const SetMfaForUser = () => {
  const [otpAuth, setOtpAuth] = useState(null);

  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: setTotp });

  const setupTotp = async () => {
    const response = await mutation.mutateAsync();

    setOtpAuth(response.otpAuth);
  };

  return (
    <div className="set-mfa-wrapper">
      {otpAuth ? (
        <>
          <p>OTP setup complete! Please scan the below QR code to add to your authenticator app:</p>
          <QRCode value={otpAuth} />
          <p>
            <Link to="/dashboard">Go to dashboard</Link>
          </p>
        </>
      ) : (
        <>
          <button disabled={mutation.isPending} onClick={setupTotp}>
            Set up TOTP
          </button>
          <button onClick={() => navigate("/setup-passkey")}>Set up Passkey authentication</button>
        </>
      )}
    </div>
  );
};

export default SetMfaForUser;
