import React, { FormEvent, useRef} from 'react'
import ApiService from '../../service/ApiService';
import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/books";

const AddBookComponent: React.FC = () =>{

    const textInputTitle = useRef<HTMLInputElement>(null);
    const textInputAuthor = useRef<HTMLInputElement>(null);

    const saveBook = (event: FormEvent) => {
        event.preventDefault();
        console.log("Saving Book");
        const titleVal = textInputTitle.current!.value;
        const authorVal = textInputAuthor.current!.value;
        const book = {
            id: '',
            title: titleVal,
            author: authorVal
        }
        console.log(book)
        axios.post(`${BOOK_API_BASE_URL}`, book);
    }


   
    return(
            
                    <div className = "field">
                        <label className="label">Title</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" ref={textInputTitle} />
                            </div>
                        <p className="help">This is a help text</p>

                        <label className="label">Author</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" ref={textInputAuthor} />
                            </div>
                        <p className="help">This is a help text</p>

                        <button className="button is-primary" onClick={saveBook }> Accept</button>
                    </div>
       
    );
    

}

export default AddBookComponent;