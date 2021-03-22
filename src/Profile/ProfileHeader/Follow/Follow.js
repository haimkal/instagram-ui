import React, { useContext, useEffect, useState } from 'react'
import { PostService } from '../../../services/post.service';
import { UserService } from '../../../services/user.service';
import { UserContext } from '../../../user-context';



export default function Follow({otherUser}) {

    
    console.log(otherUser);
    const {user} = useContext (UserContext);
    const ownUserId = user._id;

    const [followers, setFollowers] = useState (otherUser?.followers?.length ?? 0);
    const [follow, setFollow] = useState(otherUser?.followers?.includes(ownUserId));
    const [userToFollow, setUserToFollow] = useState (otherUser);

    


   
    useEffect(() => {
        setFollow(userToFollow.followers.includes(ownUserId))
        setFollowers(userToFollow.followers.length)
        
    }, [userToFollow])
    
    async function addFollow(){
        const edittedUser = await PostService.follow(otherUser._id);
        console.log(edittedUser);
        setUserToFollow(edittedUser);
    }

    
      
        
    return (
        <div>
            {followers}
           
        </div>
    )

    


    
}
   
