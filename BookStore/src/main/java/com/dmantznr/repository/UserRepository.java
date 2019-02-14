package com.dmantznr.repository;

import org.springframework.data.repository.CrudRepository;

import com.dmantznr.model.User;

public interface UserRepository  extends CrudRepository <User, Integer>{

	User findByUsername(String username);

	User findByEmail(String email);
	

}
