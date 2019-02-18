package com.dmantz.SpringBootDmantzApplication.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class PageController {
	
	@RequestMapping(value="/page")
	public ModelAndView showPage() {
		ModelAndView model=new ModelAndView("page");
		System.out.println("==============================================================enter=====================================================");
		return model;
		
	}

}
