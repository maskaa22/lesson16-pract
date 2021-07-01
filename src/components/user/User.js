import {useEffect, useState} from "react";
import {getPosts} from "../../serveses/API";
// import UserDeteils from "../user-deteils/UserDeteils";

export default function User ({item, selectUser})
{

    let [post, setPost] = useState([]);
    useEffect(()=> {
        getPosts(item.id).then( value => {
            //console.log(value.data);
            setPost(value.data)
        })
    })

    return(
        <div>
            {item.id} - {item.name} -
            <button onClick={()=>{
                selectUser(item.id);
                {
                    post.map(val => {
                        if (item.id===val.userId)
                            //<UserDeteils itemDeteils={val}/>
                        {
                            console.log(val);
                        }

                    })
                }
            }}>click me</button>



        </div>
    );}