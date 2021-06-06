// import { set } from 'js-cookie';
// import React, {useEffect, useState} from 'react'
// import Avatar from '../../common/Avatar/Avatar';
// import { UserService } from '../../services/user.service';
// import Follow from './Follow/Follow';


// export default function ProfileHeader({username, postNum}) {
//     const [user, setUser] = useState({});
//     // const [isUser, setIsUser] = useState(false);
    
//     useEffect(()=> {
//     //    const user = await UserService.me();
//     //     if(!user) {
//     //         setIsUser(false);
//     //     }
//     //     if(user.username === username){
//     //         setIsUser(true);
//     //         setUser(user);
//     //     }

//         async function getUser(){
            
//                 const user = await UserService.get(username);
//                 setUser(user);
            
//        }
//         getUser();
//      }, [username]);
//      console.log(user)
//     return (
//         <div className="mt-5">
//             <h2>{user.username}</h2>
//             <Avatar image={user.avatar} size="lg" />
//             <p>{postNum} posts</p>   
//             {/* {isUser && <a href="/user/edit">Edit profile</a>}  */}
//             <Follow otherUser={user} />
//         </div>
        
//     );
// }
