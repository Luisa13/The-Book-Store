import React, { Component } from 'react'
import ApiService from '../../service/ApiService';
import axios from 'axios';
import ReactDOM from "react-dom"
import AddBookComponent from './AddBookComponent';



const BOOK_API_BASE_URL = "http://localhost:8080/books";

class ListBookComponent extends Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            books: []
        }
        this.reloadBookList = this.reloadBookList.bind(this);
        this.addBook = this.addBook.bind(this);
    }

    componentDidMount(){
        this.reloadBookList();
    }

    reloadBookList(){
        axios(`${BOOK_API_BASE_URL}/all`)
       .then(res => {
            console.log("RESPONSE: ", res);
            this.setState({
                books: res.data
            });
        })
       .catch(error => {console.log("Error trying to fetch the data")});
    };

    addBook(){
        console.log("Adding a Book");

    };

    deleteBook(book: any){};
    
    editBook(book: any){};

    render(){
        return(

            <div>
                <HeaderComponent/>
                <div>

                    <div className="columns">
                        <div className="column">
                            

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className="hidden">Id</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>img</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.books.map(
                                            (book: any) =>
                                                <tr key={book.id}>
                                                    <td>{book.id}</td>
                                                    <td>{book.title}</td>
                                                    <td>{book.author}</td>
                                                    <td>{book.img}</td>
                                                    <td>
                                                        <div className = 'columns'>
                                                            <div className="column">
                                                                <button className="button is-primary is-outlined" onClick={() => this.deleteBook(book.id)}> Delete</button>
                                                            </div>
                                                            <div className="column">
                                                            <button className="button is-primary is-outlined" onClick={() => this.editBook(book.id)}> Edit</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                            <h2 className="text-center">Book Details</h2>
                            <button className="button is-primary" onClick={() => this.addBook()}> Add New Book</button>
                        </div>
                        
                        <div className="column">
                            <AddBookComponent/>
                        </div>
                     </div>
                    
                </div>

            </div>
           
        );
    };

    
    
}

function HeaderComponent() {
    return (
        <header className="container pt-2 pb-2">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <p className="navbar-item">
                        <img src="/logo.png" alt="BookStore" />
                    </p>

                    <button className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="navbar-end is-uppercase has-text-weight-bold">
                    <div className="navbar-item has-text-primary">Home</div>
                    <div className="navbar-item">About Us</div>
                    <div className="navbar-item">Contact</div>
                    <div className="navbar-item">Shop</div>
                    <div className="navbar-item">
                        <img src="/icon_search.png" alt="Search"/>
                    </div>
                </div>
            </nav>
        </header>
    )
};
export default ListBookComponent;

