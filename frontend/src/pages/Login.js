import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";
import { validateLogin } from "../utils/validation";
import Loader from "../components/Loader";

function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const res = await login(values);

        if (res.data.success) {
          navigate("/homepage");
        } else {
          setServerError(res.data.message || "Email atau password salah");
        }
      } catch {
        setServerError("Terjadi kesalahan server");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body">
      <div className="card shadow-sm" style={{ width: 360 }}>
        <div className="card-body">
          <h4 className="text-center mb-3">Login</h4>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              placeholder="Email"
              disabled={loading}
              onChange={e =>
                setValues({ ...values, email: e.target.value })
              }
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}

            <input
              type="password"
              className="form-control mt-2"
              placeholder="Password"
              disabled={loading}
              onChange={e =>
                setValues({ ...values, password: e.target.value })
              }
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}

            {serverError && (
              <div className="text-danger text-center mt-2">
                {serverError}
              </div>
            )}

            <button
              className="btn btn-success w-100 mt-3"
              disabled={loading}
            >
              {loading ? <Loader text="Logging in..." /> : "Login"}
            </button>

            <Link to="/signup" className="btn btn-light w-100 mt-2">
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
