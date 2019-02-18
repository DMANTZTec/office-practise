package com.dmantz.SpringBootApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.SpringBootApp.model.Menu;
import com.dmantz.SpringBootApp.repository.MenuRepository;

@RestController
public class HomeController {
	
	@Autowired
	private MenuRepository menuRepository;
	
	@RequestMapping(value="/menu")
	/*public List<Menu> getAllMenu() {
		return menuRepository.findAll();
		
	}*/
	public String hello() {
		return "hello";
	}

}
