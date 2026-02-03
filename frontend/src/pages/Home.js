import { useEffect, useState } from "react";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    api.get("/dashboard")
      .then(res => {
        if (!res.data.auth) {
          navigate("/login");
        } else {
          setName(res.data.name);
        }
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body">
      <div className="card shadow-sm" style={{ width: 360 }}>
        <div className="card-body text-center">
          <h3 className="mb-3">Dashboard</h3>

          <p className="text-body-secondary mb-4">
            Selamat datang, <strong>{name}</strong> 👋
          </p>

          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
