import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export default function RouteList() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<PrivateRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}
