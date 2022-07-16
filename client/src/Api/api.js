import axios from "axios";

const URL = 'https://vymemories.herokuapp.com/posts';

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);