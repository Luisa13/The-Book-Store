import React, { Component } from 'react'
import ApiService from '../../service/ApiService';

class AddBookComponent extends Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            title: '',
            author: '',
            img: ''
        }
        this.saveBook = this.saveBook.bind(this);
    }

    saveBook = () =>{
        let book = this.state;
        ApiService.addBook(book);
    }

    onChange = () =>{

    }

    render(){
        return("");
    }

}
export default AddBookComponent;