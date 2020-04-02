package com.dmantz.employee.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.employee.model.Department;
import com.dmantz.employee.repository.DepartmentRepository;

@RestController
@RequestMapping
public class EmployeeController {
	@PostMapping
	public Department createDept(@RequestBody Department department) {
		MongoTemplate.save(department);
		return department;
		
	}
	

}
