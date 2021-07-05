

import axios from 'axios';

let axiosInstatce = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const getUsers = () => axiosInstatce.get('/users');
const getUser = (id) => axiosInstatce.get('/users/' + id);

const getPosts = () => axiosInstatce.get('/posts');
const getPostsfUser = (id) => axiosInstatce('/posts/' + `?userId=${id}`);

export {getUsers, getUser, getPosts, getPostsfUser}