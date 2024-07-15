import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
} from "../actions/authActions";

const initialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	error: null,
};

// Load auth state from localStorage
const savedAuth = localStorage.getItem("auth");
if (savedAuth) {
	initialState.isAuthenticated = true;
	initialState.user = JSON.parse(savedAuth);
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return { ...state, loading: true, error: null };
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.username,
				loading: false,
				error: null,
			};
		case LOGIN_FAILURE:
			return { ...state, loading: false, error: action.error };
		case LOGOUT:
			return { ...state, isAuthenticated: false, user: null };
		default:
			return state;
	}
};

export default authReducer;
