import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";

function AddNote(props) {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added Sussessfully", "success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} placeholder="Enter Title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" id="description" name="description" rows="3" value={note.description} onChange={onChange} placeholder="Enter Description"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag:</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} placeholder="Enter Tag"/>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
