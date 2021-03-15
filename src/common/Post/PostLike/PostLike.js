import React, { useContext, useEffect, useState } from 'react'
import { PostService } from '../../../services/post.service';
import { UserContext } from '../../../user-context';

export default function PostLike({ post }) {
    const { user } = useContext(UserContext);

    const [likes, setLikes] = useState(post.likes.length || 0);
    const [like, setLike] = useState(post.likes.includes(user._id))
    const [thisPost, setThisPost] = useState(post);

   
    useEffect(() => {
        setLike(thisPost.likes.includes(user._id))
        setLikes(thisPost.likes.length);
    }, [thisPost])


    async function addLike() {
      
        const edittedPost = await PostService.like(post._id);
        console.log(edittedPost);
        setThisPost(edittedPost);
        
    }
    async function unlike() {
        const edittedPost = await PostService.unlike(post._id);
        console.log(edittedPost);
        setThisPost(edittedPost);
    }

    console.log(like)
    return (
        <div>
            {likes}
            <button onClick={() => like ? unlike() : addLike()}>Like</button>
            {like ? <span>&#10084;</span>:<span>&#9825;</span>}
        </div>
    )

    

}
