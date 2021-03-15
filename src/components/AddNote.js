import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startAddNote } from '../actions/notesAction';

const AddNote = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if(e.target.name === 'title') {
            setTitle(e.target.value);
        } else if(e.target.name === 'body') {
            setBody(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title,
            body
        }
        
        dispatch(startAddNote(formData));
    }

    return (
        <div>
            <form onSubmit={ handleSubmit } >
                <input type="text" name="title" placeholder="Title" value={title} onChange={ handleChange } /> <br />
                <textarea name="body" placeholder="Body" value={body} onChange={ handleChange } ></textarea> <br />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default AddNote