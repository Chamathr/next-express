import { createSlice } from '@reduxjs/toolkit';
import myApi from "../../api/api";

const initialState = {
  getUserLoading: false,
  getUserError: false,
  getUserData: [],

  addUserLoading: false,
  addUserError: false,
  addUserData: [],

  deleteUserLoading: false,
  deleteUserError: false,
  deleteUserData: [],

  editData: [],

  editUserLoading: false,
  editUserError: false,
  editUserData: [],
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
    },

    deleteUser: state => {
      state.deleteUserLoading = true
    },
    deleteUserSuccess: (state, { payload }) => {
      state.deleteUserData = payload
      state.deleteUserLoading = false
      state.deleteUserError = false
    },
    deleteUserFailure: state => {
      state.deleteUserLoading = false
      state.deleteUserError = true
    },

    setEditData: (state, { payload }) => {
      state.editData = payload
    },

    editUser: state => {
      state.editUserLoading = true
    },
    editUserSuccess: (state, { payload }) => {
      state.editUserData = payload
      state.editUserLoading = false
      state.editUserError = false
    },
    editUserFailure: state => {
      state.editUserLoading = false
      state.editUserError = true
    }
  },
});

/*Three actions generated from the slice*/
export const { getUsers, getUsersSuccess, getUsersFailure, addUser, addUserSuccess, addUserFailure, deleteUser, deleteUserSuccess, deleteUserFailure, setEditData, editUser, editUserSuccess, editUserFailure } = userSlice.actions


/*Selector*/
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

export const deleteUsers = data => {
  return async dispatch => {
    dispatch(deleteUser())
    try{
      const response = await myApi.deleteUserData(data)
      const result = await response.json()
      dispatch(deleteUserSuccess(result))
    } catch(error) {
      dispatch(deleteUserFailure())
    }
  }
}

export const setUserEditData = data => {
  return async dispatch => {
    dispatch(setEditData(data))
  }
}

export const editUsers = data => {
  return async dispatch => {
    dispatch(editUser())
    try{
      const response = await myApi.editUserData(data)
      const result = await response.json()
      dispatch(editUserSuccess(result))
    } catch(error) {
      dispatch(editUserFailure())
    }
  }
}

/*The reducer*/
export default userSlice.reducer