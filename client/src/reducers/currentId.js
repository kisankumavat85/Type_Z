import { CURRENT_ID } from '../constants/actionTypes'


export default (currentId = '', action) => {
  switch (action.type) {
    case CURRENT_ID:
      return action.payload
    default:
      return currentId
  }
}