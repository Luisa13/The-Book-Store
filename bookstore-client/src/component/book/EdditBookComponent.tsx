import React, { FormEvent, useRef} from 'react'
const BOOK_API_BASE_URL = "http://localhost:8080/books";
import axios from 'axios';

const EdditBookComponent: React.FC = () =>{

    const saveBook = () =>{
        
    }
    const txtTitle = "value";
    const txtAuthor = "value";

    return(
        <nav className="panel">
                    <p className="panel-heading">
                        Add new Book
                    </p>
                    <div className = "field">
                        <label className="label">Title</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" ref={txtTitle} />
                            </div>

                        <label className="label">Author</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" ref={txtAuthor} />
                            </div>
                        <br></br>

                        <button className="button is-primary" onClick={saveBook }> Accept</button>
                    </div>
                </nav>
    );
}

export default EdditBookComponent