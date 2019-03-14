package com.dmantz.ecapp.request;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.dmantz.ecapp.common.OrderItem;

@Entity
@Table(name="orders")

public class CreateOrderRequestPO {

	private String customerId;
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="order_id")
		private int id;
	
	@OneToMany(cascade= CascadeType.ALL)
	@JoinColumn(name="order_id",referencedColumnName="order_id")
		private List<OrderItem> orderItemObj;

	public List<OrderItem> getOrderItemObj() {
		return orderItemObj;
	}

	public void setOrderItemObj(List<OrderItem> orderItemObj) {
		this.orderItemObj = orderItemObj;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	
	

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "CreateOrderRequestPO [customerId=" + customerId + ", orderItemObj=" + orderItemObj + "]";
	}

}
