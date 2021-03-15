import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetAllNotes } from '../actions/notesAction'
import AddNote from './AddNote'
import NotesList from './NotesList'

const NotesContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetAllNotes());
    })

    return (
        <div>
            <NotesList />
            <AddNote />
        </div>
    )
}

export default NotesContainer