
import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./serveses/API";
import Users from "./components/users/Users";
import UserDeteils from "./components/user-deteils/UserDeteils";

function App() {
  let [users, setUsers] = useState([]);
  let [userDeteils, setUserDeteils] = useState(null);

  useEffect(()=> {
    getUsers().then(respons => {
      setUsers(respons.data);

    })
  } ,[])

  function  selectUser(id){
    console.log(id);
    getUser(id).then(({data}) => {
      //console.log(data);
      setUserDeteils(data)

    });
  }

  return (
    <div >
          <Users items={users} selectUser={selectUser}/>
      <hr/>
      {
        userDeteils && <UserDeteils item={userDeteils}/>
      }
    </div>
  );
}

export default App;
