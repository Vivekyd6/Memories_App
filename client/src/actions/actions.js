import {FETCH,DELETE,CREATE,UPDATE,LIKE} from '../constants/actionType';
import * as api from '../Api/api.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log({data});
    dispatch({ type: FETCH, payload: data.postMessages});
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log({data});
    dispatch({ type: CREATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (_id) => async (dispatch) => {
  try {
    await api.deletePost(_id);
    dispatch({ type: DELETE, payload: _id });
  } catch (error) {
    console.log(error);
  }
};


