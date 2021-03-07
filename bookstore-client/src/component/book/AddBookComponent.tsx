import React, { FormEvent, useRef} from 'react'
import ApiService from '../../service/ApiService';
import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/books";

const AddBookComponent: React.FC = () =>{

    const textInputTitle = useRef<HTMLInputElement>(null);
    const textInputAuthor = useRef<HTMLInputElement>(null);

    const saveBook = (event: FormEvent) => {
        event.preventDefault();
        const titleVal = textInputTitle.current!.value;
        const authorVal = textInputAuthor.current!.value;

        const book = {
            id: '',
            title: titleVal,
            author: authorVal
        }
        console.log(book)
        axios.post(`${BOOK_API_BASE_URL}`, book)
        .then(res => {
            console.info("New book added");
        })
        .catch(error => {
            console.error("Error attempting to add a new book to the bookstore")
        });

    }


   
    return(
                <nav className="panel">
                    <p className="panel-heading">
                        Add new Book
                    </p>
                    <div className = "field">
                        <label className="label">Title</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" ref={textInputTitle} />
                            </div>

                        <label className="label">Author</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" ref={textInputAuthor} />
                            </div>
                        <br></br>

                        <button className="button is-primary" onClick={saveBook }> Accept</button>
                    </div>
                </nav>
    
       
    );
    

}

export default AddBookComponent;