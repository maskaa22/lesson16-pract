

import axios from 'axios';

let axiosInstatce = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const getUsers = () => axiosInstatce.get('/users');
const getUser = (id) => axiosInstatce.get('/users/' + id);

const getPosts = () => axiosInstatce.get('/posts');
const getPost = (id) => axiosInstatce('/posts/' + id);

export {getUsers, getUser, getPosts, getPost}