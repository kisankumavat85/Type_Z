import { FETCH_ALL, DELETE, EDIT } from '../constants/actionTypes'


export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case DELETE:
      return posts.filter(post => post._id !== action.payload)
    default:
      return posts
  }
}