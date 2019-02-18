package com.dmantznr.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dmantznr.model.Book;

public interface BookRepository extends MongoRepository<Book, Integer> {
	

}
