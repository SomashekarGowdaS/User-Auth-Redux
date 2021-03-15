import { setUser } from "./registerAction";
import axios from 'axios'


export const getAccountDetails = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data;
            dispatch(setUser(result));
        })
        .catch((error) => {
            alert(error.message);
        })
    }
}
