package com.dmantznr.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dmantznr.model.User;

public interface UserRepository extends MongoRepository<User,String > {
	
	public User findOneByName(String name);

	public Optional<User> findById(String id);

}
