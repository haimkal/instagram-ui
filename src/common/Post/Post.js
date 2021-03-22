import React from 'react'
import ReactTimeAgo from 'react-time-ago';
import Avatar from '../Avatar/Avatar';
import {Link} from 'react-router-dom';
import './Post.scss';
import PostLike from './PostLike/PostLike';

export default function Post({post}) {
    
 
    return (
        
    <div className="col-12 col-md-4">
        <article className="post">
            <header>
                <div className="post__user">
                     <Link to={'/profile/' + post.user.username}>
							<Avatar size="md" image={post.user.avatar} />
							<span className="post__user__username">{post.user.username}</span>
						</Link>
                </div>
                <div className="post__createdAt post__createdAt--active">
                <Link to={'/post/'+post._id}>
                     <ReactTimeAgo date={post.createdAt} locale="en-US" /> 
                </Link>
            </div>
            </header>
          
            <h1 className="post__des">{post.description}</h1>   
            <div>
                <Link to={'/post/'+post._id}>
                    <img className="post__image" src={'data:; base64,'+post.image}/>
                </Link>
            </div>
             <PostLike post={post} />
        </article>     
    </div>
        
    )
}
