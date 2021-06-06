// import React, { useContext, useEffect, useState } from 'react'
// import { PostService } from '../../../services/post.service';
// import { UserService } from '../../../services/user.service';
// import { UserContext } from '../../../user-context';



// export default function Follow({otherUser}) {

    
//     console.log(otherUser);
//     const {user} = useContext (UserContext);
//     const ownUserId = user._id;

//     const [followers, setFollowers] = useState (otherUser?.followers?.length ?? 0);
//     const [isFollow, setIsFollow] = useState(otherUser?.followers?.includes(ownUserId));
    

    


   
//     useEffect(() => {
//         setIsFollow(userToFollow.followers.includes(ownUserId))
//         setFollowers(userToFollow.followers.length)
        
//     }, [followers, ])
    
//     async function addFollow(){
//         const edittedUser = await PostService.follow(otherUser._id);
//         console.log(edittedUser);
//         setFollowers(edittedUser);
//     }

    
      
        
//     return (
//         <div>
//             {followers}
//            <button
//         </div>
//     )

    


    
// }
   
