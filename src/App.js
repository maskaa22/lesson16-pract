import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {getUsers} from "./serveses/API";
import Users from "./components/users/Users";

function App() {
  let [users, setUsers] = useState([]);
  useEffect(()=> {
    getUsers().then(respons => {
      setUsers(respons.data);

    })
  } ,[])

  return (
    <div >
          <Users items={users}/>
    </div>
  );
}

export default App;
