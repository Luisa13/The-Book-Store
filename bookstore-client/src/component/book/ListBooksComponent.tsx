import React, { Component } from 'react'
import ApiService from '../../service/ApiService';
import axios from 'axios';


const BOOK_API_BASE_URL = "http://localhost:8080/books";

class ListBookComponent extends Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            books: []
        }
        this.reloadBookList = this.reloadBookList.bind(this);
    }

    componentDidMount(){
        this.reloadBookList();
    }

    
    reloadBookList(){
        axios.get(`${BOOK_API_BASE_URL}/all`)
       .then(res => {
            console.log("RESPONSE: ", res);
            this.setState({
                books: res.data
            });
        })
       .catch(error => {console.log("Error trying to fetch the data")});
    };

    deleteBook(bookId: any){
        axios.delete(`${BOOK_API_BASE_URL}/${bookId}`) 
            .then(rep => {
                console.info("A book was deleted");
                this.reloadBookList();
            })
            .catch( error => {
                console.error("Error trying to delete a book");
            });
    };
    
    editBook(bookId: any){
        
    };

    render(){
        return(

                        <div className = "container"> 

                            <table className="table is-hoverable is-fullwidth ">
                                <thead>
                                    <tr>
                                        <th className="is-hidden">Id</th>
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
                                                    <td className = "is-hidden">{book.id}</td>
                                                    <td>{book.title}</td>
                                                    <td>{book.author}</td>
                                                    <td>{book.img}</td>
                                                    <td>
                                                        <div className = 'columns'>
                                                            <div className = 'column  is-narrow'>
                                                                <button className="button is-primary is-outlined" onClick={() => this.deleteBook(book.id)}> Delete</button>
                                                            </div>
                                                            <div className = 'column  is-narrow'>  
                                                                <button className="button is-primary is-outlined" onClick={() => this.editBook(book.id)}> Edit</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <section className="section"> </section>

                            
                        </div>
           
        );
    };

    
    
}

export default ListBookComponent;

