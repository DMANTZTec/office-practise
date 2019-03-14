package com.dmantz.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="sampleorder")

public class Order {
	@Id
	@GeneratedValue
	
	private int orderId;
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	@OneToMany(fetch = FetchType.EAGER,mappedBy="order",cascade = CascadeType.ALL)
	private List<Options> itemOptions;
	
	
	
	
	public List<Options> getItemOptions() {
		return itemOptions;
	}
	public void setItemOptions(List<Options> itemOptions) {
		this.itemOptions = itemOptions;
	}
	
		
}
