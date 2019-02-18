package com.dmantz.WebApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.dmantz.WebApplication.dao.CategoryDAO;
import com.dmantz.WebApplication.dto.Category;

@RestController
public class PageController {
	
	@Autowired
	private CategoryDAO categoryDAO;
	
	@RequestMapping(value= {"/show/all/products"})
	public ModelAndView showAllProducts() {
		ModelAndView mv= new ModelAndView("page");
		mv.addObject("title", "All Products");
		
		// passing the List of categories
		mv.addObject("categories", categoryDAO.list());
		mv.addObject("userClickAllProducts", true);
		return mv;
	}
	
	
	@RequestMapping(value="/show/category/{id}/products")
	public ModelAndView showCategoryProducts(@PathVariable("id") Integer id) {
		ModelAndView mv = new ModelAndView("page");
		
		//categoryDAO to fetch a single category
		Category category=null;
	category=categoryDAO.get(id);
		
		// passing the List of categories
		mv.addObject("title", category.getName());
		mv.addObject("categories", categoryDAO.list());
		
		//passing single category object
		mv.addObject("category", category);
		
		mv.addObject("UserClickCategoryProducts", true);
		return mv;
		
		
		
	}
	
		
		
	}
	
	
	


