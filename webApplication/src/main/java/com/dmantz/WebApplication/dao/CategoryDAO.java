package com.dmantz.WebApplication.dao;

import java.util.List;

import com.dmantz.WebApplication.dto.Category;

public interface CategoryDAO {
	
	List<Category> list();

	Category get(Integer id);
	

}
