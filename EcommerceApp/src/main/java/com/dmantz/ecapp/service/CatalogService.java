package com.dmantz.ecapp.service;

import org.springframework.stereotype.Service;

import com.dmantz.ecapp.request.CatalogRequest;
import com.dmantz.ecapp.response.CatalogResponse;

@Service

public class CatalogService {

	
	public CatalogResponse catalog(CatalogRequest catalogReq) {
	    System.out.println("this is CatalogService's catalog(.) method.");
	    CatalogResponse cresObj= new CatalogResponse();
		CatalogRequest creqObj= catalogReq;
        cresObj.setFilterCriteria(creqObj.getFilterCriteria());
        cresObj.setProducts(creqObj.getProducts());
		return cresObj;
	}
}
