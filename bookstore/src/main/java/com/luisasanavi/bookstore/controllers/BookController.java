package com.luisasanavi.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
	@CrossOrigin(origins = "*")
	@PostMapping
	public void addBook(@RequestBody Book book) {
		this.bookRepository.insert(book);
	}
	
	@GetMapping("/")
	public String empty() {
		return "There is nothing to see";
	}
	
	@GetMapping("/{id}")
	public Book getUser(@PathVariable String id) {
		Book book = this.bookRepository.findById(id).get();
		return book;
	}
	
	@CrossOrigin(origins = "*")
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
	
	@GetMapping("/title/{title}")
	public Book searchByTitle(@PathVariable String title) {
		return this.bookRepository.findByTitle(title).get();
	}
	
	@GetMapping("/author/{author}")
	public List<Book> searchByAuthor(@PathVariable String author){
		return this.bookRepository.findByAuthor(author);
	}

}
