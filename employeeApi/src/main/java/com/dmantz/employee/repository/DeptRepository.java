package com.dmantz.employee.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.dmantz.employee.model.Department;

public class DeptRepository {
	
	@Autowired
	private MongoTemplate mongoTemplate;
	public List findAll() {
		return mongoTemplate.findAll(Department.class);
	
		
	}
	public Department save(Department department) {
		 mongoTemplate.save(department);
		return department;
	}
	
	

}
