import React, { useContext } from 'react';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../user-context';
import {Link} from 'react-router-dom';
import './HeaderAvatar.scss';

export default function HeaderAvatar() {
    const { user } = useContext(UserContext);
    return (
        <div className="HeaderAvatar">
          <Link to={'/profile/' + user.username}>
                <Avatar size="md"/>
                <span className="mx-2 HeaderAvatar__username d-none d-lg-block" >{user.username}</span>   
            </Link>  
        
        </div>
    )
}
