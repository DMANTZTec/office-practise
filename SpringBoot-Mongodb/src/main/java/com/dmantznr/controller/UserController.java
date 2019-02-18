package com.dmantznr.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dmantznr.model.User;
import com.dmantznr.repository.UserRepository;
//import com.google.common.net.MediaType;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	// create 
	@RequestMapping(method=RequestMethod.POST)
	public void create(@RequestBody User user) {
		userRepository.save(user);
		
	}
	
	//read
	@RequestMapping(value="/{id}")
	public Optional<User> read(@PathVariable String id) {
		return userRepository.findById(id); 
		
	}
	//update
	@RequestMapping(method=RequestMethod.POST)
	public void update(User user) {
		userRepository.save(user);
		
	}
	
	//delete
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public void delete(String id) {
		userRepository.deleteById(id);
	
	
	}

}
