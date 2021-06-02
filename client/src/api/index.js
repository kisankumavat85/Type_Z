import axios from 'axios'

const url = 'https://typez.herokuapp.com'

// Home page API
export const fetchAllPosts = (currentPage) => axios.get(`${url}/${currentPage}`)

// Mobile page API
export const fetchMobilePosts = (currentPage) => axios.get(`${url}/mobile/${currentPage}`)

// Computer page API
export const fetchComputerPosts = (currentPage) => axios.get(`${url}/computer/${currentPage}`)

// Science page API
export const fetchSciencePosts = (currentPage) => axios.get(`${url}/science/${currentPage}`)

// Search page API
export const fetchSearchedPosts = (currentPage, query) => axios.post(`${url}/search/${currentPage}`, query)

// Dashboard API
export const fetchAllPostsDashboard = (currentPage) => axios.get(`${url}/dashboard/${currentPage}`)
export const craetePost = (newPost) => axios.post(`${url}/dashboard/create`, newPost)
export const deletePost = (id) => axios.delete(`${url}/dashboard/delete/${id}`)
export const editPost = (id, post) => axios.patch(`${url}/dashboard/create/${id}`, post)
