package com.dmantz.ecapp.common;

import java.util.ArrayList;

public class ProductSku {

String sku;
ArrayList<Option> options;
String image;
String price;


public String getSku() {
	return sku;
}
public void setSku(String sku) {
	this.sku = sku;
}
public ArrayList<Option> getOptions() {
	return options;
}
public void setOptions(ArrayList<Option> options) {
	this.options = options;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}
public String getPrice() {
	return price;
}
public void setPrice(String price) {
	this.price = price;
}



}
