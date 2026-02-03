import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuth } from "../services/authService";

function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    checkAuth()
      .then(res => setAuth(res.data.auth))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <div className="text-light">Loading...</div>;
  return auth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
