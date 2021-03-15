import React,{ useState } from 'react'
import { startAuthRegister } from '../actions/registerAction';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';


const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            username,
            email,
            password
        }
        dispatch(startAuthRegister(formData, props.history.push));
    }

    const handleChange = (e) => {
        if(e.target.name === 'username') {
            setUsername(e.target.value);
        } else if(e.target.name === 'email') {
            setEmail(e.target.value);
        } else if(e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    return (
        <div>
            <h2> Register with us </h2>
            <form onSubmit={ handleSubmit } >
                <input type="text" name="username" placeholder="Enter username" value={username} onChange={ handleChange } /> <br />
                <input type="text" name="email" placeholder="Enter email" value={email} onChange={ handleChange } /> <br />
                <input type="password" name="password" placeholder="Enter password" value={password} onChange={ handleChange } /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default withRouter(Register)