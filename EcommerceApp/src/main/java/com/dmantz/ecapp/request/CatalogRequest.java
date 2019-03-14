package com.dmantz.ecapp.request;

import java.util.ArrayList;

import com.dmantz.ecapp.common.FilterCriteria;
import com.dmantz.ecapp.common.Product;


public class CatalogRequest {

	FilterCriteria filterCriteria;
	ArrayList<Product> products;
	
	public FilterCriteria getFilterCriteria() {
		return filterCriteria;
	} 
	public void setFilterCriteria(FilterCriteria filterCriteria) {
		this.filterCriteria = filterCriteria;
	}
	public ArrayList<Product> getProducts() {
		return products;
	}
	public void setProducts(ArrayList<Product> products) {
		this.products = products;
	}
	
	
}
