import { createSlice } from '@reduxjs/toolkit'

const initialState = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return null
    },
  }
})

export const { setMessage, removeNotification } = notificationSlice.actions

export const setNotification = (message, seconds) => {
  return dispatch => {
    dispatch(setMessage(message))
    setTimeout(() => dispatch(removeNotification()), seconds * 1000);
  }
}

export default notificationSlice.reducer