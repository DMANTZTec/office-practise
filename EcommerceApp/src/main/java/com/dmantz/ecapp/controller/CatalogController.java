package com.dmantz.ecapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.ecapp.request.CatalogRequest;
import com.dmantz.ecapp.response.CatalogResponse;
import com.dmantz.ecapp.service.CatalogService;

@RestController
public class CatalogController {

	@RequestMapping(value="ec/catalog",method=RequestMethod.POST) 
	public CatalogResponse catalog(@RequestBody CatalogRequest catalogReq) {
		System.out.println("this is CatalogController's catalog(.) method. ");
	    
		
		/* CatalogService cs=new CatalogService();
	    ProductInfo pi=cs.catalog(productInfo); */
		
		CatalogService catalogserviceObj=new CatalogService();
     
       
		return catalogserviceObj.catalog(catalogReq);
	}
	
}
