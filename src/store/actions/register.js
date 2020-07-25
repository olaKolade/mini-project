import * as actionTypes from './actionTypes';

export const registerUser = (user) => {
	return {
		type: actionTypes.REGISTER_USER,
		user: user
	}
}