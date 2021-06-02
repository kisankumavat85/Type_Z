import * as api from '../api'
import { setIsLoading } from '../actions/isLoading'
import { FETCH_ALL } from '../constants/actionTypes'

export const getAllPosts = (currentPage) => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts(currentPage)
    dispatch(setIsLoading(false))
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.craetePost(post)
  } catch (error) {
    console.log(error)
  }
}
