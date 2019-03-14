package com.dmantzapp.controller;



import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dmantzapp.service.LoginService;

import ch.qos.logback.core.net.SyslogOutputStream;

@RestController
public class HelloWorldController {
	@Autowired
	LoginService loginServiceObj;

	
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public  String login(@RequestBody JSONObject user) {
		System.out.println("u have entered in controller class");
		String s1=loginServiceObj.login(user);
	System.out.println("we are leaving controller class");
		
		return s1 ;
		
	}
	
}
