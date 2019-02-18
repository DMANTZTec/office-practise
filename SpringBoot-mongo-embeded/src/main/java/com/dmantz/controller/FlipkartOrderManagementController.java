package com.dmantz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.model.User;
import com.dmantz.repository.FlipkartRepository;

@RestController
@RequestMapping("/orderservice")
public class FlipkartOrderManagementController {
	
	@Autowired
	private FlipkartRepository flipkartRepository;
	
	@PostMapping("/placeOrderNow")
	public String placeOrder(@RequestBody User user) {
		flipkartRepository.save(user);
		
		return "Order placed successfully..."; 
	}

	@GetMapping("/getUserByName/{name}")
	 List<User> getUserByName(@PathVariable String name){
		return flipkartRepository.findByName(name);
	}
	@GetMapping("/getUserByAddress/{city}")
	 List<User> getUserByAddress(@PathVariable String city){
		return flipkartRepository.findByCity(city);
	}
}
