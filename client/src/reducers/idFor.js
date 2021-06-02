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

const initialIdFor = {
  idForDelete: '',
  isLoggedIn: false,
  currentPageHome: 1,
  currentPageMobile: 1,
  currentPageComputer: 1,
  currentPageScience: 1,
  currentPageSearch: 1,
  currentPageDashboard: 1
}

export default (idFor = initialIdFor, action) => {
  switch (action.type) {
    case ID_FOR_DELETE:
      return { ...idFor, idForDelete: action.payload }
    case IS_LOGGED_IN:
      return { ...idFor, isLoggedIn: action.payload }
    case CURRENT_PAGE_HOME:
      return { ...idFor, currentPageHome: action.payload }
    case CURRENT_PAGE_MOBILE:
      return { ...idFor, currentPageMobile: action.payload }
    case CURRENT_PAGE_COMPUTER:
      return { ...idFor, currentPageComputer: action.payload }
    case CURRENT_PAGE_SCIENCE:
      return { ...idFor, currentPageScience: action.payload }
    case CURRENT_PAGE_SEARCH:
      return { ...idFor, currentPageSearch: action.payload }
    case CURRENT_PAGE_DASHBOARD:
      return { ...idFor, currentPageDashboard: action.payload }
    default:
      return idFor
  }
}