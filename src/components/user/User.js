import {useEffect, useState} from "react";
import {getPostsfUser} from "../../serveses/API";
import Posts from "../posts/Posts";



export default function User ({item, selectUser})
{

    let [posts, setPosts] = useState([]);
    const getPosts = ()=> {
        getPostsfUser(item.id).then( value => {
            setPosts(value.data);
        });
    };

    return(
        <div>
            {item.id} - {item.name} -
            <button onClick={()=>{
                selectUser(item.id);
                getPosts();
            }}>click me</button>
                <Posts items={posts}/>


        </div>
    )}