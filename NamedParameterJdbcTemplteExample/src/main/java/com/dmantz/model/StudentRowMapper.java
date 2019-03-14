package com.dmantz.model;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class StudentRowMapper implements RowMapper<Student> {

	@Override
	public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		Student sObj=new Student();
		sObj.setSid(rs.getInt("sid"));
		sObj.setSname(rs.getString("sname"));
		return sObj;
	}

}
