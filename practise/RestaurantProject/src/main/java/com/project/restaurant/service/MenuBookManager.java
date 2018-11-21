package com.project.restaurant.service;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.restaurant.dao.MenuBookDAO;

@Service
public class MenuBookManager {

	@Autowired
	private MenuBookDAO menubookObj;
	
	
	public JSONObject menubookDetails() {
		MenuBook[] menuBookList
		JSONObject jsonObj=menubookObj.showMenuBook();
	    return jsonObj;
		}
}
