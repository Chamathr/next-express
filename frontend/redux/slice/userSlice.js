import { createSlice } from '@reduxjs/toolkit';
import myApi from "../../api/api";

const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: state => {
      state.loading = true
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload
      state.loading = false
      state.hasErrors = false
    },
    getUsersFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
});

/*Three actions generated from the slice*/
export const { getUsers, getUsersSuccess, getUsersFailure } = userSlice.actions


/*A selector*/
export const userSelector = state => state.user

/*Asynchronous thunk action*/
export const  fetchUsers = () => {
  return async dispatch => {
    dispatch(getUsers())
    try {
      const response = await myApi.getUserData()
      const data = await response.json()
      dispatch(getUsersSuccess(data))
    } catch (error) {
      dispatch(getUsersFailure())
    }
  }
}

/*The reducer*/
export default userSlice.reducer