const notesInitialState = [];

const notesReducer = (state = notesInitialState, action) => {
    switch(action.type) {
        case 'Set_All_Notes': {
            return [...action.payload];
        }
        case 'Set_Single_Note': {
            return [...state, action.payload];
        }
        case 'Delete_Note': {
            return state.filter(note => {
                return note._id !== action.payload._id
            });
        }
        case 'Clear_Notes': {
            return notesInitialState;
        }


        default: {
            return [...state];
        }
    }
}

export default notesReducer