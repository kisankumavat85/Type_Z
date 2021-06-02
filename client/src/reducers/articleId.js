import { ARTICLE_ID } from '../constants/actionTypes'

export default (articleId = '', action) => {
  switch (action.type) {
    case ARTICLE_ID:
      return action.payload
    default:
      return articleId
  }
}