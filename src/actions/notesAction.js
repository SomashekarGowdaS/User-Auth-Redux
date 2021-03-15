import axios from 'axios'

export const startAddNote = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data;
            dispatch(setSingleNote(result));
            alert('Note Added');
        })
        .catch((error) => {
            alert(error.message);
        })
    }
}

export const startGetAllNotes = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data;
            dispatch(setAllNotes(result));
        })
        .catch((error) => {
            alert(error.message);
        })
    }
}

export const setAllNotes = (notes) => {
    return {
        type: 'Set_All_Notes',
        payload: notes
    }
}

export const setSingleNote = (note) => {
    return {
        type: 'Set_Single_Note',
        payload: note
    }
}

export const startDeleteNote = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
            .then((response) => {
                const result = response.data;
                dispatch(deleteNote(result));
            })
            .catch((error) => {
                alert(error.message);
            })
    }
}

export const deleteNote = (note) => {
    return {
        type: 'Delete_Note',
        payload: note
    }
}

export const startGetNoteDetails = (_id) => {
    return (dispatch) => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data;
            alert(`
                Title: ${result.title}
                Body: ${result.body}
            `);
        })
        .catch((error) => {
            alert(error.message);
        })
    }
}

export const clearNotes = () => {
    return {
        type: 'Clear_Notes'
    }
}