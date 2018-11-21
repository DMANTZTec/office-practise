package com.project.restaurant.dao;

import java.util.List;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.LinkedCaseInsensitiveMap;


@Repository
public class MenuBookDAO {
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
	
	public JSONObject showMenuBook() {
		
		JSONArray jsonarrayObj=new JSONArray();
		JSONObject jsonMainObj=new JSONObject();
		JSONObject jsonObj=null;
		
		// write jdbc code to retrive records from database.
		 System.out.println("JdbcTemplate object is: "+jdbcTemplate);
		 String query="select * from menubook";
		 List results=jdbcTemplate.queryForList(query);
		 for(Object result:results) {
			 LinkedCaseInsensitiveMap map=(LinkedCaseInsensitiveMap)result;
			 jsonObj=new JSONObject();
			 for (Object key : map.keySet()) {
				
		         //System.out.print(key + " = " + map.get(key) + "; ");
		         
		         jsonObj.put(key, map.get(key));
			 }
			
			 jsonarrayObj.put(jsonObj);
			 
		     System.out.println();
		 }
		 jsonMainObj.put("MenuBook",jsonarrayObj);
		 System.out.println(jsonarrayObj.toString());
	 
	      return jsonMainObj;
	        
	}
	}