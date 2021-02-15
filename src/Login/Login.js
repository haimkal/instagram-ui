import { ErrorMessage } from 'formik';
import React from 'react';
import Cookies from 'js-cookie';
import {useHistory } from 'react-router-dom';
import  {loginSchema} from './login.schema';
import {Form, Formik, Field} from 'formik';
import { useState } from 'react';
import {H2, LABEL} from '../StylesComponent/StylesComponent';
import PhotoAnimation from '../PhotoAnimation/PhotoAnimation';
import './Login.scss';

export default function Login() {

    const history = useHistory();
    const [showError, setShowError]= useState(false);

    function submit(values) {
        setShowError(false);
        fetch('http://localhost:4000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res=> {
            if (res.status === 200) {
                res.json()
                    .then(json=> {
                        Cookies.set('instagram-user', json.token, {expires: 30});
                        history.push('/');
                    });
                return;
            }
            setShowError(true);
        });
    }

    return (
        <div className= "container-login-page">
            <div className='Login'>    
                <H2 primary>Login</H2>
                {showError && <div className="alert alert-danger">
                    Incorrect username or password
                </div>}
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={submit}>
                            <Form>
                                <div className="form-group mb-3">
                                    <LABEL htmlFor="username">Username</LABEL>
                                    <Field className="form-control" id="username" name="username" type="text" placeholder="username" />
                                    <ErrorMessage render={(msg)=> <div className="ErrorMessage">{msg}</div>} name="username" component="div" />
                                </div>
                            
                                <div className="form-group mb-3  mx-auto">
                                    <LABEL htmlFor="password">Password</LABEL>
                                    <Field type="password" className="form-control" id="password" name="password" placeholder="password" />
                                    <ErrorMessage render={(msg)=> <div className="ErrorMessage">{msg}</div>} name="password" component="div" />
                                </div>

                                <div className="form-group mb-3 mx-auto">
                                    <button type="submit" className="btn btn-primary btn-lg btn-success">Login</button>
                                </div>
                            </Form>   
                </Formik>
            </div>

            <div className='photo-animation'>
                <PhotoAnimation/>
            </div>

        </div>        


     
    );
}
