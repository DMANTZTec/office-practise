package com.dmantz.ecapp.common;

import java.util.ArrayList;

public class Product {

	String productId;
	String productManufacturerName;
	String brandName;
	ArrayList<ProductSku> productSkus;
	
	
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getProductManufacturerName() {
		return productManufacturerName;
	}
	public void setProductManufacturerName(String productManufacturerName) {
		this.productManufacturerName = productManufacturerName;
	}
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public ArrayList<ProductSku> getProductSkus() {
		return productSkus;
	}
	public void setProductSkus(ArrayList<ProductSku> productSkus) {
		this.productSkus = productSkus;
	}
	
	
	
	
	
	
	
	
	
	
		
       
}
