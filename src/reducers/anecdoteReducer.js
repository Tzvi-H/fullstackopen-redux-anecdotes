import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    initializeAnecdotes(state, action) {
      return action.payload
    },
    voteFor(state, action) {
      const id = action.data.id;
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes +1 }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    },
    createAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { initializeAnecdotes, voteFor, createAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer