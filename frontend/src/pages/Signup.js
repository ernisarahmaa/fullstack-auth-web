import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/authService";
import { validateSignup } from "../utils/validation";
import Loader from "../components/Loader";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateSignup(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        await signup(values);
        navigate("/login");
      } catch {
        alert("Gagal daftar");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body">
        <div className="card shadow-sm" style={{ width: 360 }}>
            <div className="card-body">
                <h4 className="text-center mb-3">Sign Up</h4>

                <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    placeholder="Name"
                    onChange={e => setValues({ ...values, name: e.target.value })}
                    disabled={loading}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}

                <input
                    className="form-control mt-2"
                    placeholder="Email"
                    onChange={e => setValues({ ...values, email: e.target.value })}
                    disabled={loading}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}

                <input
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                    onChange={e => setValues({ ...values, password: e.target.value })}
                    disabled={loading}
                />
                {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                )}

                <button
                    className="btn btn-success w-100 mt-3"
                    disabled={loading}
                >
                    {loading ? <Loader text="Creating account..." /> : "Sign Up"}
                </button>

                <Link to="/login" className="btn btn-light w-100 mt-2">
                    Back to Login
                </Link>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Signup;
