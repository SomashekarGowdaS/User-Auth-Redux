import axios from 'axios'

export const startAuthRegister = (formData, navigate) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register', formData)
        .then((response) => {
            const result = response.data;
            if(result.hasOwnProperty('errors')) {
                alert(result.message);
            } else {
                alert('Successfully Registered');
                navigate('/login');
            }
        })
        .catch((error) => {
            alert(error.message);
        });
    }
}

export const setUser = (user) => {
    return {
        type: 'Set_User',
        payload: user
    }
}

export const clearUser = () => {
    return {
        type: 'Clear_User'
    }
}