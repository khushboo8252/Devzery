import axios from 'axios';

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

export const createPost = (postData) => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', postData);
};

export const getComments = (postId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
};
