package com.dmantzapp.dao;


import java.util.Iterator;
import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDao {
	@Autowired
	JdbcTemplate jt;

	public String loginDao(JSONObject user) {
				System.out.println("we are enterd into LoginDao class");
		
		//code for inserting data data into database
		
		/*String uname=(String) user.get("uname");
		String pwd=(String)user.get("pwd");
		String sql="insert into user values(?,?)";
		jt.update(sql,new Object[] {uname,pwd} );*/
		
		//code for retrieving data from the database
		List l1=jt.queryForList("select * from user");
		
		Iterator it = l1.iterator();
		while(it.hasNext())
		{
		Object o = it.next();
		System.out.println(o.toString());
	
		}
		
		//code for deleting a row in the database
		
		/*String sql="delete from user where uname='rohitjain'";
		jt.execute(sql);
		System.out.println(sql);
		System.out.println("one row succesfully deleted");
		System.out.println("we r leaving LoginDao class");
		return "values successfully inserted";*/
		String sql="update user set uname='mounikaswarna' where uname= 'mounika'";
		jt.update(sql);
		return "value succesfully updated";
	}

}
