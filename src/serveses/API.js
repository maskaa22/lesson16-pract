//
// const getUsers= ()=> {
//     return  fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
// };
// const getUser= (id)=> {
//     return  fetch('https://jsonplaceholder.typicode.com/users' + id)
//         .then(value => value.json());
// };
// export {getUsers, getUser}

import axios from 'axios';

let axiosInstatce = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});
const getUsers = () => axiosInstatce.get();
const getUser = (id) => axiosInstatce('/' + id);
export {getUsers, getUser}