import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { loginToggle } from '../actions/loginAction';
import { clearNotes } from '../actions/notesAction';
import { clearUser } from '../actions/registerAction';
import Account from './Account';
import Home from './Home';
import Login from './Login';
import NotesContainer from './NotesContainer';
import Register from './Register';
import { withRouter } from 'react-router-dom'

const NavBar = (props) => {
    const login = useSelector((state) => {
        return state.login;
    });
    const dispatch = useDispatch();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        dispatch(clearNotes());
        dispatch(clearUser());
        dispatch(loginToggle());
        alert('User Logged Out');
        props.history.push('/');
    }

    return (
        <div>
            <ul>
                <li> <Link to='/'> Home </Link> </li>
                {
                    login ? (
                        <>
                            <li> <Link to='/account' > Account </Link> </li>
                            <li> <Link to='/notes' > Notes </Link> </li>
                            <li> <Link to='#' onClick={handleLogOut} > Logout </Link> </li>
                        </>
                    ) : (
                        <>
                            <li> <Link to='/register' > Register </Link> </li>
                            <li> <Link to='/login' > Login </Link> </li>
                        </>
                    )
                }
            </ul>

            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/notes" component={NotesContainer} />
        </div>
    )
}

export default withRouter(NavBar)