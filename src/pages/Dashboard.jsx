import { useEffect } from "react";
import.meta.env;
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/authActions";
import { subscribeToChannel } from "../services/pusherService";
import { addPusherData } from "../actions/pusherActions";

import "./Dashboard.css";
export default function Dashboard() {
	const { data } = useSelector((state) => state.pusher);

	useEffect(() => {
		document.title = import.meta.env.VITE_APP_NAME;
	}, []);

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	useEffect(() => {
		subscribeToChannel("cricket", "score_updated", (data) => {
			console.log("Data from socket: ", data);
			dispatch(addPusherData(data));
		});
	}, [dispatch]);

	// The response of pusher subscribed event
	//  {
	//     "score": 258,
	//     "timestamp": "2024-06-04 17:15:02"
	// }

	return (
		<div>
			<div style={{ display: "flex", gap: 200, marginBottom: 20 }}>
				<h3>Dashboard</h3>
				<button onClick={handleLogout}>Logout</button>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th></th>
						<th>Score</th>
						<th>Timestamp</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}.</td>
							<td>{item.score}</td>
							<td>{item.timestamp}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
