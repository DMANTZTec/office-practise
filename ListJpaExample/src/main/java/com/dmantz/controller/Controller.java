package com.dmantz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.model.Order;
import com.dmantz.model.User;
import com.dmantz.repository.OrderRepository;
import com.dmantz.repository.UserRepository;

@RestController
public class Controller {
	@Autowired
	OrderRepository repository;
	
	@Autowired
	UserRepository userRepository;
  	@PostMapping(value="/addOrder")
	public String addObject(@RequestBody Order order) {
		repository.save(order);
		return "data inserted";
		
	}
  	@PostMapping(value="/oneToMany")
  	public String adduser(@RequestBody User user) {
  		userRepository.save(user);
  		return "user added";
  	}
}
