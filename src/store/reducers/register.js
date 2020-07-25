import * as actionTypes from '../actions/actionTypes';

const initialState = {
	users: [],
	userId: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_USER:
			const updatedUsers = state.users.concat(action.user);
			const updatedState = {
				...state,
				userId: action.user.id,
				users: updatedUsers
			};
			
			return updatedState;
		default:
			return state;
	}

}

export default reducer;

