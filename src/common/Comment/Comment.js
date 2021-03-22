import React from 'react'
import Avatar from '../Avatar/Avatar'

export default function Comment({comment}) {
    return (
       <div>
           <Avatar image={comment.Avatar} />
           <p className="mb-0">{comment.content}</p> 
           <span>{comment.createdAt}</span>
      
    </div>
    )
}

