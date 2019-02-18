package com.dmantz.WebApplication.daoimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.dmantz.WebApplication.dao.CategoryDAO;
import com.dmantz.WebApplication.dto.Category;

@Repository
public class CategoryDAOImpl implements CategoryDAO{
	
	private static List<Category> categories =new ArrayList<>();
	static {
		
	
Category category=new Category();

	category.setId(1);
	category.setName("Television");
	category.setDescription("this is new");
	category.setImageURL("CAT_1.png");
	
	categories.add(category);
	
	category.setId(2);
	category.setName("mobile");
	category.setDescription("this is new");
	category.setImageURL("CAT_2.png");
	
	categories.add(category);
	category.setId(3);
	category.setName("Laptop");
	category.setDescription("this is new");
	category.setImageURL("CAT_3.png");
	
	categories.add(category);
	}
	@Override
	public List<Category> list() {
		
		return categories;
	}
	@Override
	public Category get(Integer id) {
		
		//enhanced for loop
		for(Category category : categories) {
			if(category.getId()==id) return category;
		}
		
		
		return null;
	}

}
