import { Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Menu.scss';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
            <ul className="nav">
                <li>
                    <Link className="nav-item" to="/">
                        <FontAwesomeIcon icon={faIgloo}/>
                    </Link>
                </li>
                <li >
                    <Link className="nav-item" to="/post/create">
                        <FontAwesomeIcon icon={faPlusCircle}/>
                    </Link>
                </li>
                <li >
                    <Link className="nav-item" to="/search">
                        <FontAwesomeIcon icon={faSearch}/>
                    </Link>
                </li>
            </ul>
    );
}
