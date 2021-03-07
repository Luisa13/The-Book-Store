import React, { FormEvent, useRef, useState} from 'react'
import AddBookComponent from '../book/AddBookComponent';
import ListBooksComponent from '../book/ListBooksComponent'

const BookStoreApp: React.FC = () => {

    const [isVisible, setVisibility] = useState(false);

    const addBook = () =>{
        setVisibility(!isVisible);
        console.log(isVisible);
    };

    return(
        <div>
            <div><HeaderComponent/></div>
                <div className="columns">
                    <div className="column">
                        <ListBooksComponent />
                        <div>
                            <h2 className="text-center">Book Details</h2>
                            <button className="button is-primary" onClick={addBook}> Add New Book</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className={`modal ${isVisible ? "is-active" : ""}`}>
                        <div className="modal-background"></div>
                        <div className="modal-content">
                        <div className="box">
                            <AddBookComponent/>
                        </div>
                        </div>
                        <button className="modal-close is-large" aria-label="close"></button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div>
            <section className="hero is-small is-primary">
                <div className="hero-body">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_463110.png&f=1&nofb=1g" style={{height:50}} />
                    <p className="title">
                        The bookStore
                    </p>
                    <p className="subtitle"></p>
                </div>
            </section>
            <section className="section">
                <h1 className="title"></h1>
            </section>
        </div>
  
  
    )
  };

export default BookStoreApp;