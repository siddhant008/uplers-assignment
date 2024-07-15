import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/authActions";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		if (auth.isAuthenticated) {
			navigate("/dashboard");
		}
	}, [auth.isAuthenticated, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(username, password));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Sign In</h3>
			{location.state?.message && (
				<p style={{ color: "red" }}>{location.state.message}</p>
			)}

			<div className="mb-3">
				<label>Username</label>
				<input
					type="text"
					className="form-control"
					placeholder="Enter username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className="d-grid">
				<button
					type="submit"
					className="btn btn-primary"
					disabled={auth.loading || !(password && username)}
				>
					Submit
				</button>
			</div>
			{auth.error && <div className="error">{auth.error}</div>}
		</form>
	);
}
