package com.dmantz.springbootwithSecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.springbootwithSecurity.model.User;
import com.dmantz.springbootwithSecurity.repository.UserRepository;

@RestController
@RequestMapping("/secure/rest")
public class AdminController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping(value="/admin/add")
	public String addUserByAdmin(@RequestBody User user) {
		String pwd=user.getPassword();
		String encryptPwd=passwordEncoder.encode(pwd);
		user.setPassword(encryptPwd);
		userRepository.save(user);
		return "user added Successfully";
	}
}
