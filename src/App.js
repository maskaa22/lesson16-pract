
import './App.css';
import {useEffect, useState} from "react";
import {getUsers} from "./serveses/API";
import Users from "./components/users/Users";


function App() {
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState({})
  useEffect(()=> {
    getUsers().then(respons => {
      setUsers(respons.data);
    })
  } ,[]);

  let selectUser = (id) =>{
    console.log(id);
    setUser({...users.find(value => value.id===id)});

  };

  return (
    <div >
      <h2>{user.username}</h2>
          <Users items={users} selectUser={selectUser}/>
      <hr/>
    </div>
  );
}

export default App;
