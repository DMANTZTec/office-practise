package com.project.restaurant.controller;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.restaurant.service.MenuBookManager;

@RestController
public class ProjectController {

	@Autowired
	MenuBookManager menubookManagerObj;


	@RequestMapping(value="/rest/menubook",method=RequestMethod.GET)
	public @ResponseBody JSONObject menubook() {

		// use json object as return type and parameter
		JSONObject jsonObj=menubookManagerObj.menubookDetails();

		return jsonObj;		
	}

}
