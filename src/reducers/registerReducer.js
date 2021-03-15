const userInitialState = {}

const registerReducer = (state = userInitialState, action) => {
    switch(action.type) {
        case 'Set_User': {
            return action.payload;
        }
        case 'Clear_User': {
            return userInitialState;
        }

        default: {
            return state;
        }
    }
}

export default registerReducer