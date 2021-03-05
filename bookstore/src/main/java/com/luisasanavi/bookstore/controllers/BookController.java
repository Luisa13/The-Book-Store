package com.luisasanavi.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luisasanavi.bookstore.models.Book;
import com.luisasanavi.bookstore.repository.BookRepository;

@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;
	
	@PostMapping
	public void addBook(@RequestBody Book book) {
		this.bookRepository.save(book);
	}
	
	@GetMapping("/{id}")
	public Book getUser(@PathVariable String id) {
		Book book = this.bookRepository.findById(id).get();
		return book;
	}
	
	@GetMapping("/all")
	public List<Book> getAll(){
		return this.bookRepository.findAll();
	}
	
	@PutMapping
	public void update(@RequestBody Book book) {
		this.bookRepository.save(book);
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable String id) {
		Book book = this.bookRepository.findById(id).get();
		this.bookRepository.delete(book);
	}
	
	/*@GetMapping("{id}")
	public Book searchByTitle() {
		this.bookRepository.find
	}
	
	@GetMapping("{id}")
	public List<Book> searchByAuthor(){
		
	}*/

}
