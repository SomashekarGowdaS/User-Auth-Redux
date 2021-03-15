import React, { useState } from 'react'
import { startAuthLogin } from '../actions/loginAction';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email,
            password
        }
        dispatch(startAuthLogin(formData, props.history.push));
    }

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            setEmail(e.target.value);
        } else if(e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    return (
        <div>
            <h2> Login </h2>
            <form onSubmit={ handleSubmit } >
                <input type="text" name="email" placeholder="Enter email" value={email} onChange={ handleChange } /> <br />
                <input type="password" name="password" placeholder="Enter password" value={password} onChange={ handleChange } /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default withRouter(Login)