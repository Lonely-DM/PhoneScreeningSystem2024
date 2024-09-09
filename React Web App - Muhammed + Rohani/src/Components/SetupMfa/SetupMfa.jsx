import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { verifySession } from "../../api/sessions";

import "./SetupMfa.css";
import SetMfaForUser from "./SetMfaForUser";

const SetupMfa = () => {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    verifySession().then((response) => {
      setSession(response.session);
    });
  }, []);

  return (
    <div className="setup-mfa-wrapper">
      {session === undefined && "Loading session..."}
      {session === null && (
        <>
          Please ensure you are logged in before viewing this page. <Link to="/login">Login</Link>
        </>
      )}
      {session && <SetMfaForUser />}
    </div>
  );
};

export default SetupMfa;
