import {useEffect, useState} from "react";
import {getPosts} from "../../serveses/API";
import UserDeteils from "../user-deteils/UserDeteils";


export default function User ({item, selectUser})
{

    let [posts, setPosts] = useState([]);
    useEffect(()=> {
        // getPosts(item.id).then( value => {
        //     //console.log(value.data);
        //     setPost(value.data)
        // })
    })

    return(
        <div>
            {item.id} - {item.name} -
            <button onClick={()=>{
                selectUser(item.id);
                {

                    getPosts(item.id).then( value => {
                        setPosts(value.data)
                    });

                }
            }}>click me</button>
            {posts.map(val => {
                    if (item.id===val.userId)
                    {
                        //
                        return <div><hr/>{val.title}<hr/></div>
                    }
            })}



        </div>
    )}