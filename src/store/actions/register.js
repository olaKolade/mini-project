import * as actionTypes from './actionTypes';

export const registerUser = (user) => {
	return {
		type: actionTypes.AUTH_REGISTER,
		user: user
	}
}