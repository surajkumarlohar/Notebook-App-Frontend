import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";

function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;

    const {note, updateNote} = props;

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                        <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully", "success")}}></i>
                    </div>
                    <span className="badge rounded-pill text-bg-info">{note.tag}</span>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
}

export default NoteItem
