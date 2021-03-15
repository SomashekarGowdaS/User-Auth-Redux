const loginInitialState = false;

const loginReducer = (state = loginInitialState, action) => {
    switch(action.type) {
        case 'Login_Toggle': {
            return !state;
        }

        default: {
            return state;
        }
    }
}

export default loginReducer