import { createSlice } from '@reduxjs/toolkit'

import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setNotes(state, action) {
      return action.payload
    },
    voteFor(state, action) {
      const id = action.data.id;
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes +1 }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    },
    addAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { voteFor, addAnecdote, setNotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setNotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(addAnecdote(newAnecdote))
  }
}



export default anecdoteSlice.reducer