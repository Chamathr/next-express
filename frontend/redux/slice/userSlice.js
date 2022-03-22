import { createSlice } from '@reduxjs/toolkit';
import myApi from "../../api/api";

const initialState = {
  getUserLoading: false,
  getUserError: false,
  getUserData: [],

  addUserLoading: false,
  addUserError: false,
  addUserData: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: state => {
      state.userLoading = true
    },
    getUsersSuccess: (state, { payload }) => {
      state.getUserData = payload
      state.getUserLoading = false
      state.getUserError = false
    },
    getUsersFailure: state => {
      state.getUserLoading = false
      state.getUserError = true
    },

    addUser: state => {
      state.addUserLoading = true
    },
    addUserSuccess: (state, { payload }) => {
      state.addUserData = payload
      state.addUserLoading = false
      state.addUserError = false
    },
    addUserFailure: state => {
      state.addUserLoading = false
      state.addUserError = true
    }
  },
});

/*Three actions generated from the slice*/
export const { getUsers, getUsersSuccess, getUsersFailure, addUser, addUserSuccess, addUserFailure } = userSlice.actions


/*A selector*/
export const userSelector = state => state.user

/*Asynchronous thunk action*/
export const fetchUsers = () => {
  return async dispatch => {
    dispatch(getUsers())
    try {
      const response = await myApi.getUserData()
      const data = await response.json()
      dispatch(getUsersSuccess(data.result))
    } catch (error) {
      dispatch(getUsersFailure())
    }
  }
}

export const addUsers = data => {
  return async dispatch => {
    dispatch(addUser())
    try {
      const response = await myApi.addUserData(data)
      const result = await response.json()
      dispatch(addUserSuccess(result))
    } catch (error) {
      dispatch(addUserFailure())
    }
  }
}

/*The reducer*/
export default userSlice.reducer