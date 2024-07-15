export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => async (dispatch) => {
	dispatch({ type: LOGIN_REQUEST });

	try {
		if (username === "admin" && password === "admin") {
			const user = { username };
			localStorage.setItem("auth", JSON.stringify(user));
			dispatch({ type: LOGIN_SUCCESS, payload: user });
		} else {
			throw new Error("Invalid credentials");
		}
	} catch (error) {
		dispatch({ type: LOGIN_FAILURE, error: error.message });
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem("auth");
	dispatch({ type: LOGOUT });
};
