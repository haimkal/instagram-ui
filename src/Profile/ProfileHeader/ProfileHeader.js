import { set } from 'js-cookie';
import React, {useEffect, useState} from 'react'
import Avatar from '../../common/Avatar/Avatar';
import { UserService } from '../../services/user.service';

export default function ProfileHeader({username, postNum}) {
    const [user, setUser] = useState({});
    const [isUser, setIsUser] = useState(false);
    
    useEffect(async()=> {
       const user = await UserService.me();
        if(!user) {
            setIsUser(false);
        }
        if(user.username === username){
            setIsUser(true);
            setUser(user);
        }

        async function getUser(){ //?
            const user = await UserService.get(username);
            setUser(user);
        }
        getUser();
    }, [username]);

    return (
        <div className="mt-5">
            <h2>{user.username}</h2>
            <Avatar image={user.avatar} size="lg" />
            <p>{postNum}</p>   
            {isUser && <a href="/user/edit">Edit profile</a>} 
        </div>
        
    );
}
