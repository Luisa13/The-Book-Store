import axios from 'axios';


const BOOK_API_BASE_URL = "http://localhost:8080/books";

// DEPRECATED
class ApiService{

    addBook(book: any){
        console.log(book.json);
        debugger;
        return axios.post(`${BOOK_API_BASE_URL}/${book.json}`);
    }

    
    async getAllBooks(){
        return await axios(`${BOOK_API_BASE_URL}/all`)
       .then(res => {
            console.log("RESPONSE: ", res)
        })
       .catch(error => {console.log("Error trying to fetch the data")});
    }
}

export default new ApiService();