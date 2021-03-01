import React from 'react'
import ReactTimeAgo from 'react-time-ago';
import Avatar from '../Avatar/Avatar';
import {Link} from 'react-router-dom';
import './Post.scss';

export default function Post({data}) {
    
 
    return (
        
        <div className="post">
            <div className="post__avatarAndName">
                <Avatar size="sm" image={data.user.avatar} />
                {data.user.username}
            </div>
            <div className="post__createdAt post__createdAt--active">
                <Link to={'/post/'+data._id}>
                     <ReactTimeAgo date={data.createdAt} locale="en-US" /> 
                </Link>
            </div>
            <div className="post__des">{data.description}</div>   
            <div>
                <img className= "post__image" src={'data:; base64,'+data.image}/>
            </div>
             
        </div>
    )
}
