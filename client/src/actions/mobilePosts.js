import { fetchMobilePosts } from '../api'
import { setIsLoading } from '../actions/isLoading'
import { FETCH_ALL } from '../constants/actionTypes'

export const getMobilePosts = (currentPage) => async (dispatch) => {
  try {
    const { data } = await fetchMobilePosts(currentPage)
    dispatch(setIsLoading(false))
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}