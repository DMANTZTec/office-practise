package com.dmantzapp.service;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dmantzapp.dao.LoginDao;

@Service
public class LoginService {
	@Autowired
	LoginDao loginDaoObj;
	public String login(JSONObject user) {
		System.out.println("we r in login service method");
		
		
		String s1=loginDaoObj.loginDao(user);
		System.out.println("we r leaving login service method");
		return s1;
		
	}

}
