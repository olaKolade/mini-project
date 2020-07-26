import * as actionTypes from './actionTypes';


export const loginUser = (userId) => {
	return {
		type: actionTypes.AUTH_LOGIN,
		userId: userId
	}
}