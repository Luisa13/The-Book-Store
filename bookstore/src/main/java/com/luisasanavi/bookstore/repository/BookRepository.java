package com.luisasanavi.bookstore.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.luisasanavi.bookstore.models.Book;

public interface BookRepository extends MongoRepository<Book, String>{
	public Optional<Book> findByTitle(String title);
	public List<Book> findByAuthor(String author);
}
