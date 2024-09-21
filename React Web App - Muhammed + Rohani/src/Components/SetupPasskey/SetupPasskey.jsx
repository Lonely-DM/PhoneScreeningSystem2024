import { startRegistration } from "@simplewebauthn/browser";
import { generateRegistrationOptions, verifyRegistration } from "../../api/users";
import { Link } from "react-router-dom";
import { useState } from "react";

const SetupPasskey = () => {
  const [isComplete, setIsComplete] = useState(false);

  const setupPasskey = async () => {
    const resp = await generateRegistrationOptions();
    const attResp = await startRegistration(resp);

    await verifyRegistration(attResp);

    setIsComplete(true);
  };

  return (
    <div className="set-passkey-wrapper">
      {isComplete ? (
        <>
          <p>Passkey setup complete!</p>
          <p>
            <Link to="/dashboard">Go to dashboard</Link>
          </p>
        </>
      ) : (
        <button onClick={setupPasskey}>Set up Passkey</button>
      )}
    </div>
  );
};

export default SetupPasskey;
