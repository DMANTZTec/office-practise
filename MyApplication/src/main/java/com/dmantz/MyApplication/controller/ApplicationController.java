package com.dmantz.MyApplication.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationController {
	
	@ResponseBody
	@RequestMapping(value="/home")
	public String hello() {
		
		return "Hello Spring Boot";
	}

}
