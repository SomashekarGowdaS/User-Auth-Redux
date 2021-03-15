import React from 'react'
import { useDispatch } from 'react-redux';
import { startDeleteNote, startGetNoteDetails } from '../actions/notesAction';

const Note = (props) => {
    const { _id, title, body } = props;
    const dispatch = useDispatch();

    const showDetails = () => {
        dispatch(startGetNoteDetails(_id));
    }

    const handleDelete = () => {
        if(window.confirm(`are you sure to delete ${title} ?`)) {
            dispatch(startDeleteNote(_id));
        }
    }

    return (
        <div style={{border: '2px solid black', margin: '3px'}} >
            <p onClick={ showDetails } > <b> { title } </b> </p>
            <p onClick={ showDetails } > { body } </p>
            <button onClick={ handleDelete } > delete </button>
        </div>
    )
}

export default Note