import { ErrorMessage } from 'formik';
import React, { useState, useContext } from 'react';
import Cookies from 'js-cookie';
import {Link, useHistory } from 'react-router-dom';
import  {loginSchema} from './login.schema';
import {Form, Formik, Field} from 'formik';
import {H2, LABEL} from '../StylesComponent/StylesComponent';
import PhotoAnimation from '../PhotoAnimation/PhotoAnimation';
import './Login.scss';
import { UserService } from '../services/user.service';
import { UserContext } from '../user-context';

export default function Login() {

    const history = useHistory();
    const {setUser} = useContext(UserContext);
    const [showError, setShowError]= useState(false);

    async function submit(values) {
        setShowError(false);
        
        try{
            const res = await UserService.login(values);
            const {token} = await res.json();
            Cookies.set('instagram-user', token, {expires: 30});
    
            const user = await UserService.me();
            setUser(user);
            history.push('/');

        } catch (err) {
            setShowError(true);
        }
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

                                <div className="text-center">
                                  Don't have an account? <Link to="/Register" className="Login__register-link">Register</Link>
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
