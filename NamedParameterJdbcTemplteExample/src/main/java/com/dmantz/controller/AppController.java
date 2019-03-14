package com.dmantz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.model.LoginDao;
import com.dmantz.model.Student;

@RestController
public class AppController {
	
	@Autowired
	 private LoginDao loginDaoObj;
	
	@RequestMapping(value="/hello",method=RequestMethod.POST)
	public Student hello(@RequestParam int studentId) {
		
		return loginDaoObj.getDetails(studentId);
		
	}

}
