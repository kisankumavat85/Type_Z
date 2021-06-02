import { combineReducers } from 'redux'

import posts from './posts'
import idFor from './idFor'
import mobilePosts from './mobilePosts'
import computerPosts from './computerPosts'
import sciencePosts from './sciencePosts'
import dashboardPosts from './dashboardPosts'
import articleId from './articleId'
import isLoading from './isLoading'
import currentId from './currentId'
import searchedPosts from './searchedPosts'

export default combineReducers({
  posts,
  idFor,
  mobilePosts,
  computerPosts,
  sciencePosts,
  dashboardPosts,
  articleId,
  isLoading,
  currentId,
  searchedPosts
})