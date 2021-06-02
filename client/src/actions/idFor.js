import {
  ID_FOR_DELETE,
  IS_LOGGED_IN,
  CURRENT_PAGE_HOME,
  CURRENT_PAGE_MOBILE,
  CURRENT_PAGE_COMPUTER,
  CURRENT_PAGE_SCIENCE,
  CURRENT_PAGE_SEARCH,
  CURRENT_PAGE_DASHBOARD
} from '../constants/actionTypes'

export const setIdForDelete = (id) => async (dispatch) => {

  dispatch({ type: ID_FOR_DELETE, payload: id })

}
export const setIsLoggedIn = (value) => async (dispatch) => {

  dispatch({ type: IS_LOGGED_IN, payload: value })

}
export const setCurrentPageHome = (value) => async (dispatch) => {

  dispatch({ type: CURRENT_PAGE_HOME, payload: value })

}
export const setCurrentPageMbile = (value) => async (dispatch) => {

  dispatch({ type: CURRENT_PAGE_MOBILE, payload: value })

}
export const setCurrentPageComputer = (value) => async (dispatch) => {

  dispatch({ type: CURRENT_PAGE_COMPUTER, payload: value })

}
export const setCurrentPageScience = (value) => async (dispatch) => {

  dispatch({ type: CURRENT_PAGE_SCIENCE, payload: value })

}
export const setCurrentPageSearch = (value) => async (dispatch) => {

  dispatch({ type: CURRENT_PAGE_SEARCH, payload: value })

}
export const setCurrentPageDashboard = (value) => async (dispatch) => {

  dispatch({ type: CURRENT_PAGE_DASHBOARD, payload: value })

}
