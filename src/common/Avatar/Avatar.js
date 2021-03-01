import React from 'react';
import avatarDefault from './avatarDefault.png'
import './Avatar.scss';
import PropTypes from 'prop-types';

export default function Avatar(props) {

    const image = props.image || avatarDefault;
    const size = props.size || 'md';

    return (
        <img src={image} className="Avatar" alt="avatar" />
    );
}

Avatar.propTypes = {
    size: PropTypes.oneOf(['sm','md', 'lg'])
};


