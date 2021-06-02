import { fetchSearchedPosts } from '../api'
import { setIsLoading } from './isLoading'
import { FETCH_ALL } from '../constants/actionTypes'

export const getSearchedPosts = (currentPage, query) => async (dispatch) => {

  try {
    const { data } = await fetchSearchedPosts(currentPage, query)
    dispatch(setIsLoading(false))
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}