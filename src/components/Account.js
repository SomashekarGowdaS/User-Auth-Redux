import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountDetails } from '../actions/accountAction';

const Account = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.user;
    })

    useEffect(() => {
        dispatch(getAccountDetails());
    }, []);

    return (
        <div>
            <h2> User Account </h2>
            <p> Email - { user.email } </p>
            <p> Username - { user.username } </p>
        </div>
    )
}

export default Account