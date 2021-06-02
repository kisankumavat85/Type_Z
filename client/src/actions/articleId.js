import { ARTICLE_ID } from '../constants/actionTypes'

export const setIdForArticle = (id) => async (dispatch) => {

  dispatch({ type: ARTICLE_ID, payload: id })

}