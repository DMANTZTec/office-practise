package com.dmantz.SpringBootBootstrap.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleRestController {
	
	public String hello() {
		return "Hello World";
	}

}
