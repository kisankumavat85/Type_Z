import { fetchComputerPosts } from '../api'
import { setIsLoading } from '../actions/isLoading'
import { FETCH_ALL } from '../constants/actionTypes'

export const getComputerPosts = (currentPage) => async (dispatch) => {
  try {
    const { data } = await fetchComputerPosts(currentPage)

    dispatch(setIsLoading(false))

    console.log(data, 'computer');
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}