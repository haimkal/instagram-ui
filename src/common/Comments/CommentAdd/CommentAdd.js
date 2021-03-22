import React, {useState} from 'react'
import { PostService } from '../../../services/post.service';

export default function CommentAdd({postId, onCommentAdd}) {

    const [content, setContent] = useState('');

    async function submit (e){
        
        e.preventDefault();
        const comment = await PostService.createComment(content, postId);
        onCommentAdd(comment);
        setContent('');

    }
    return (
    <form onSubmit={submit}>
        <div className="mb-2">
            <textarea 
            
                onChange={(e)=> setContent(e.target.value)}
                className="form-control"  
                value={content}>
            </textarea>
        </div>
         <button className="btn btn-success">Submit</button>
    </form>
    )
}
