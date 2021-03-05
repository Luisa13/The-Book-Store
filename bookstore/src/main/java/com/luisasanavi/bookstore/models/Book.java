package com.luisasanavi.bookstore.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Books")
public class Book {

	@Id
	private String id;
	
	private String title;
	private  String author;
	private String img;
	
	public Book() {
		this.id = null;
		this.author = null;
		this.title = null;
		this.img = null;
	}
	
	public Book(String title, String author) {
		this.title = title;
		this.author = author;
		this.id = title + author;
	}
	
	public String getId() {
		return this.id;
	}
	
	public String getAuthor() {
		return this.author;
	}
	
	public String getTitle() {
		return this.title;
	}
	
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	
	@Override
	public String toString() {
		return String.format("Book[id='%s', title='%s', author='%s']",
				this.id, this.title, this.author);
	}
}
