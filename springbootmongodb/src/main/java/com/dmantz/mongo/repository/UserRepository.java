package com.dmantz.mongo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dmantz.mongo.model.User;

public interface UserRepository extends MongoRepository<User,String > {
	
	public User findOneByName(String name);

	
}