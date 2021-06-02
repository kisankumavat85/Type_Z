import * as api from '../api'
import { setIsLoading } from '../actions/isLoading'
import { FETCH_ALL } from '../constants/actionTypes'

export const getSciencePosts = (currentPage) => async (dispatch) => {
  try {
    const { data } = await api.fetchSciencePosts(currentPage)
    dispatch(setIsLoading(false))
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}