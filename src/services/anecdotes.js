import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async content => {
  const anecdote = {content, vote: 0}

  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

const update = async (updatedAnecdote) => {
  const id = updatedAnecdote.id 
  
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
  return response.data
}

const anecdoteService = { getAll, create, update }

export default anecdoteService