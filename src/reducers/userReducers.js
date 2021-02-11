import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_SAVE_FAIL,
  USER_SAVE_REQUEST,
  USER_SAVE_SUCCESS,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from "../constants/userConstants";

function userListReducer(state = { users: [] }, action) {

  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, users: [] };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function userSaveReducer(state = { user: {} }, action) {

  switch (action.type) {
    case USER_SAVE_REQUEST:
      return { loading: true };
    case USER_SAVE_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case USER_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function userDeleteReducer(state = { user: {} }, action) {

  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, user: action.payload, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { userListReducer, userSaveReducer, userDeleteReducer }