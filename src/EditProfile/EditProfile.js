import React from 'react'
import { UserService } from '../services/user.service'

export default function EditProfile(userToEdit) {

    return (
        <div className="EditProfile">
            <Formik initialValue={{username:'', email: '', bio: ''}}
                validationSchema= {userEditSchema}
                onSubmit={(values) => await UserService.editUser(values) }>

<Formik
                    initialValues={{ image: "", username: user.username, email: user.email }}
                    enableReinitialize={true}
                    validationSchema={profileSchema}
                    onSubmit={submit}>

                   
                    {/* <Form className="form">
                                    <div htmlFor="username">Username</LABEL>
                                    <Field className="form-control" id="username" name="username" type="text" placeholder="username" />
                                    <ErrorMessage render={(msg)=> <div className="ErrorMessage">{msg}</div>} name="username" component="div" />
                                </div>
                            
                                <div className="form-group mb-3  mx-auto">
                                    < htmlFor="password">Password</LABEL>
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
 */}


                </Formik>
            
            
        </div>
    )
}
