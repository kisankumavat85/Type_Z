import { FETCH_ALL } from '../constants/actionTypes'

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    default:
      return posts
  }
}