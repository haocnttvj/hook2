// actions.js
import * as actionTypes from "./actionTypes";
import UserService from "./UserService";

export const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: actionTypes.FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());

    try {
      const users = await UserService.getUsers();
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
  };
};
