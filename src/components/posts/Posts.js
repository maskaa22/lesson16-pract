import Post from "../post/Post";


export default function Posts ({items})
{
    return(
        <div>
            {
                items.map(post => <Post key={post.id} item={post}/>)
            }

        </div>
    );
}