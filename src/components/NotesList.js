import { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import { Link } from "react-router-dom";

const NotesList = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        NotesService.getAll()
        .then(response => {
            console.log('printing response', response.data);
            setNotes(response.data);
        }).catch(error => {
            console.log('something went wrong', error);
        }, []);
    });

    return (
        <div className="container">
            <h1>List of Notes</h1>
            <div className="notes-list mt-4">
            {
                notes.length > 0 ? notes.map(note => (
                    <div key={note.id} className="notes-preview mt-3">
                        <Link to={`/notes/${note.id}`}>
                        <h5 className="primary-color text-capitalize">{note.title}</h5>
                        <p>{note.body}</p>
                        <p>{note.category}</p>
                        </Link>
                    </div>
                )) : <div><h2>Note is not available yet.</h2></div>
            }
            </div>
        </div>
    ) 
}

export default NotesList;