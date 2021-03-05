package com.luisasanavi.bookstore.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.luisasanavi.bookstore.models.Book;

public interface BookRepository extends MongoRepository<Book, String>{

}
