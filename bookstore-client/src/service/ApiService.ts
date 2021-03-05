import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:8080/books/';

class ApiService{

    addBook(book){
        return axios.post(BOOK_API_BASE_URL + book);
    }
}

export default new ApiService();