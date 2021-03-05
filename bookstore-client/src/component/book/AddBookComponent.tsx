import React, { Component } from 'react'
import ApiService from '../../service/ApiService';

class AddBookComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            img: ''
        }
        this.saveBook = this.saveBook.bind(this);
    }

    saveBook = (event) =>{
        event.preventDefault();
        let book = this.state;
        ApiService.addBook(book);
    }

    onChange = () =>{

    }

    render(){
        return();
    }

}