package com.dmantz.model;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDao {
@Autowired
private NamedParameterJdbcTemplate njt;


public Student getDetails(int studentId) {
	System.out.println("student id is  "+studentId);
	String sql="select * from student where sid=:sid";
	Map<String,Object> inputMap=new HashMap();
	inputMap.put("sid",studentId);
	Student student=(Student) njt.queryForObject(sql,inputMap, new StudentRowMapper());
	return student;
}
	
	
}
