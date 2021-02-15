
import React, {useState} from 'react';
import './Register.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from './register.schema';
import {H2, LABEL} from '../StylesComponent/StylesComponent';
import {useHistory} from 'react-router-dom';
import Logo from '../Logo/Logo';
export default function Register(props) {

const history = useHistory();
const [showSuccess, setSuccess] = useState(false);

    function submit(values) {
        fetch('http://localhost:4000/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res=> { 
            if(res.status===201){
                setSuccess(true);
                setTimeout(()=> history.push('/login'), 2000);
                return;
            }
                console.log('Failure!!');
        });
    }

    return (
        <div className= "container-reg-page">
            <div className="Register">
                <H2 primary>Register</H2>
                <Formik
                    initialValues={{ username: '', email: '', password: '', agreeToTerms: false }}
                    validationSchema={registerSchema}
                    validateOnChange={true}
                    onSubmit={submit}>
                        {({isSubmitting })=> (
                        <Form>
                             <div className="mb-3">
                                 <LABEL htmlFor="username">Username</LABEL>
                                 <Field className="form-control" id="username" name="username" placeholder="Username"/>
                                 <ErrorMessage render={(msg)=> <div className="ErrorMessage">{msg}</div>} name="username" component="div" />
                             </div>
                             <div className="mb-3">
                                 <LABEL htmlFor="email">Email</LABEL>
                                 <Field type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                 <ErrorMessage render={(msg)=> <div className= "ErrorMessage">{msg}</div>} name="email" component="div" />
                             </div>
     
                             <div className="mb-3">
                                 <LABEL htmlFor="password">Password</LABEL>
                                 <Field type="password" className="form-control" id="password" name="password" placeholder="password" />
                                 <ErrorMessage render={(msg)=> <div className= "ErrorMessage">{msg}</div>} name="password" component="div" />
                             </div>
     
     
                             <div className="form-check  mb-3">
                                 <LABEL className="form-check-label" htmlFor="agreeToTerms">Agree to terms</LABEL>
                                 <Field type="checkbox" className="form-check-input" id="agreeToTerms" name="agreeToTerms" />
                                 <ErrorMessage className= "ErrorMessage" name="agreeToTerms" component="div" />
                             </div>
                             <div className="form-group my-3">
                                {showSuccess
                                    ? <div className="alert alert-success Register__success"><b>Success!</b> Wait for transfer...</div> 
                                    : <button type="submit" className="btn btn-success mt-3 Register__submit-btn" disabled={isSubmitting}>Submit</button>
                                }
                             </div>
                         </Form>

                        )}
                   
                </Formik>
            </div>

            <div className="sectionLogo">
                <Logo/>
            </div>
        </div>




    )
}
