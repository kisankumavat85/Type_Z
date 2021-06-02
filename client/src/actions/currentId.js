import { CURRENT_ID } from '../constants/actionTypes'

export const setCurrentId = (id) => async (dispatch) => {

  dispatch({ type: CURRENT_ID, payload: id })

}