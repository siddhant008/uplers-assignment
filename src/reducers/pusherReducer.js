import { ADD_PUSHER_DATA } from "../actions/pusherActions";

const initialState = {
	data: [],
};

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PUSHER_DATA: {
			const newData = [...state.data];
			newData.unshift(action.payload);
			const trimmedData = newData.slice(0, 10);
			return {
				...state,
				data: trimmedData,
			};
		}
		default:
			return state;
	}
};

export default dataReducer;
