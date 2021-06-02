import * as api from '../api'
import { setIsLoading } from '../actions/isLoading'
import { FETCH_ALL, DELETE } from '../constants/actionTypes'

export const getAllPosts = (currentPage) => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPostsDashboard(currentPage)

    dispatch(setIsLoading(false))

    console.log(data, 'dashboard data');
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id)

    dispatch(setIsLoading(false))

    console.log("delete data", data);
    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const editPost = (id, post) => async (dispatch) => {

  console.log('action dashboardposts editpost', post);

  try {
    const { data } = await api.editPost(id, post)

    dispatch(setIsLoading(false))

    console.log("edit data", data);
  } catch (error) {
    console.log(error)
  }
}

