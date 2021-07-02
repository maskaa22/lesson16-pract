
import './App.css';
import {useEffect, useState} from "react";
import {getPost, getPosts, getUser, getUsers} from "./serveses/API";
import Users from "./components/users/Users";
import UserDeteils from "./components/user-deteils/UserDeteils";
// import Posts from "./components/posts/Posts";

function App() {
  let [users, setUsers] = useState([]);
  let [userDeteils, setUserDeteils] = useState(null);
  // let [posts, setPosts] = useState([]);
  // let [postDeteils, setPostDeteils] = useState(null);


  useEffect(()=> {
    getUsers().then(respons => {
      setUsers(respons.data);

    })
  } ,[]);

  // useEffect(()=> {
  //   getPosts().then(respons => {
  //     setPosts(respons.data);
  //
  //   })
  // } ,[]);


  function  selectUser(id){
    console.log(id);
    getUser(id).then(({data}) => {
      //console.log(data);
      setUserDeteils(data)

    });
  };

  // function  selectPost(id){
  //   console.log(id);
  //   getPost(id).then(({data}) => {
  //     //console.log(data);
  //     setPostDeteils(data)
  //
  //   });
  // };

  return (
    <div >
          <Users items={users} selectUser={selectUser}/>
          {/*<Posts items={posts} selectPost={selectPost}/>*/}
      <hr/>
      {
        userDeteils && <UserDeteils item={userDeteils}/>
      }
    </div>
  );
}

export default App;
