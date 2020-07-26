import * as actionTypes from '../actions/actionTypes';

const initialState = {
	users: [],
	userId: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_REGISTER:
			const registeredUser = state.users.concat(action.user);
			console.log(registeredUser, 'reducer');
			return {
				...state,
				userId: action.user.id,
				users: registeredUser
			};

		case actionTypes.AUTH_LOGIN:
			return {
				...state,
				userId: action.userId
			};

		case actionTypes.AUTH_LOGOUT:
			// const removedUsers = [...state.users];
			// const index = removedUsers.findIndex(user => user.id === action.userId);
			// removedUsers.splice(index, 1);

			return {
				...state,
				userId: null
			}

		default:
			return state;
	}

}

export default reducer;

