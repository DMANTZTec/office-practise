package com.dmantz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.model.Users;
import com.dmantz.repository.UserRepository;

@RestController
public class Controller {
	/*@Autowired
	UserRepository userRepository;
	
	@GetMapping(value="/getUsers")
	public List<Users> getAllUsers() {
		return userRepository.findAll();
		
	}
	
	@PostMapping(value="/addUser")
	public List<Users> createUser(@RequestBody Users user){
		userRepository.save(user);
		return userRepository.findAll();
		
	}*/
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping("/findAll")
	public List<Users> getAllusers(){
		
		return userRepository.findAll();
	}

	@PostMapping(value="/addUser")
	public List<Users> createUser(@RequestBody Users user){
		userRepository.save(user);
		return userRepository.findAll();
		
		
	}
}
