import { IS_LOADING } from '../constants/actionTypes'

export const setIsLoading = (condation) => async (dispatch) => {

  dispatch({ type: IS_LOADING, payload: condation })

}