package com.dmantz.employee.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.dmantz.employee.model.Department;
@Repository
public interface DepartmentRepository extends MongoRepository{
	
	@Query(value="{'employees.name':?0}",fields = " {'employees':0}")
	Department findDepartmentByEmployeeName(String empName);
	List findDepartmentByName(String Name);

}
