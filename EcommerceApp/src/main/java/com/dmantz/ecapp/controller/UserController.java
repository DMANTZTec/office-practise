package com.dmantz.ecapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.ecapp.dao.UserRepository;
import com.dmantz.ecapp.request.CreateSignUpRequestPO;
import com.dmantz.ecapp.service.UserManagerService;

@RestController
public class UserController {
	
	@Autowired
	UserManagerService userManagerServiceObj;
	
	@Autowired
	UserRepository userRepositoryObj;
	
	@RequestMapping(value="/signUp",method=RequestMethod.POST)
	public CreateSignUpRequestPO createSignUp(@RequestBody CreateSignUpRequestPO CreateSignUpRequestPOObj) {
		
		return userManagerServiceObj.createSignUp(CreateSignUpRequestPOObj);
	}

//	@RequestMapping(value="/findAll")
//	public List<CreateSignUpRequestPO>findAll() {
//		return userRepositoryObj.findAll();
//	}
//	
//	@RequestMapping(value="/addOrSave")
//	public CreateSignUpRequestPO save(@RequestBody CreateSignUpRequestPO createSignUpRequestPOObj) {
//		
//		return userRepositoryObj.save(createSignUpRequestPOObj);
//		
//	}
}
