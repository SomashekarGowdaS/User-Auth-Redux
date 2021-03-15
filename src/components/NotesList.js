import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note';

const NotesList = (props) => {
    const notes = useSelector((state) => {
        return state.notes;
    })

    return (
        <div>
            <h2> My Notes </h2>
            { notes.length === 0 ? (
                    <h3> No notes found add your first note </h3>
            ) : (
                <>
                    { notes.map(note => {
                        return <Note key={ note._id } {...note} />
                    }) }
                </>
            ) }
        </div>
    )
}

export default NotesList