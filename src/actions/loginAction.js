import axios from 'axios'

export const loginToggle = () => {
    return {
        type: 'Login_Toggle'
    }
}

export const startAuthLogin = (formData, navigate) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
        .then((response) => {
            const result = response.data;
            if(result.hasOwnProperty('errors')) {
                alert(result.errors);
            } else {
                alert('Login Successful');
                localStorage.setItem('token', result.token);
                dispatch(loginToggle());
                navigate('/');
            }
        })
        .catch((error) => {
            alert(error.message);
        });
    }
}
