import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { PostService } from '../services/post.service';
import Avatar from '../common/Avatar/Avatar';

import './PostPage.scss';

export default function PostPage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=> {
        async function getPost() {
            try {
                const p = await PostService.get(id);
                if(p) {
                    setPost(p);
                } else {
                    console.log('Post does not exist!')
                } 
            } catch (err) {
                    console.log(err);
            }
            
        }
        
        getPost();
    }, [id]);
    
    return (
        <>
        {post && (
        <div className="Post">
                <div>
                    <Avatar size="sm" image={post.user.avatar} />
                    {post.user.username}
                </div>
                <div>{post.createdAt}</div>
                <div>{post.description}</div>   
                <div>
                    <img src={'data:; base64,'+post.image} className="Post__image"/>
                </div>
        </div>
        )}
    </>
        
    )
}
