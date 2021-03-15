import React from 'react'
import ReactTimeAgo from 'react-time-ago';
import Avatar from '../Avatar/Avatar';
import {Link} from 'react-router-dom';
import './Post.scss';
import PostLike from './PostLike/PostLike';

export default function Post({post}) {
    
 
    return (
        <>
    <div className="post">
            <div className="post__avatarAndName">
                <Avatar size="sm" image={post.user.avatar} />
                {post.user.username}
            </div>
            <div className="post__createdAt post__createdAt--active">
                <Link to={'/post/'+post._id}>
                     <ReactTimeAgo date={post.createdAt} locale="en-US" /> 
                </Link>
            </div>
            <div className="post__des">{post.description}</div>   
            <div>
                <img className= "post__image" src={'data:; base64,'+post.image}/>
            </div>
             <PostLike post={post} />
        </div>
        </>
    )
}
