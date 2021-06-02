import { IS_LOADING } from '../constants/actionTypes'

export default (isLoading = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return action.payload
    default:
      return isLoading
  }
}