package com.dmantz.ecapp.common;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Mounika
 *
 */
@Entity
@Table(name = "order_item")
public class OrderItem {
	
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderItemId;
	
	/*@ManyToOne(cascade= CascadeType.ALL)
    @JoinColumn(name = "orderId")
    private  CreateOrderRequestPO order;*/
	
	private int order_id;


		private int productId;
	private String productSku;
	private String mrpPrice;
	private String price;
	private String discountApplied;
	private String quantity;
	private String giftWrapped;
	private String productName;
	
	
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public int getOrderItemId() {
		return orderItemId;
	}
	public void setOrderItemId(int orderItemId) {
		this.orderItemId = orderItemId;
	}
		public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductSku() {
		return productSku;
	}
	public void setProductSku(String productSku) {
		this.productSku = productSku;
	}
	public String getMrpPrice() {
		return mrpPrice;
	}
	public void setMrpPrice(String mrpPrice) {
		this.mrpPrice = mrpPrice;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDiscountApplied() {
		return discountApplied;
	}
	public void setDiscountApplied(String discountApplied) {
		this.discountApplied = discountApplied;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getGiftWrapped() {
		return giftWrapped;
	}
	public void setGiftWrapped(String giftWrapped) {
		this.giftWrapped = giftWrapped;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	@Override
	public String toString() {
		return "OrderItem [order_id=" + order_id + ", orderItemId=" + orderItemId + ", productId=" + productId
				+ ", productSku=" + productSku + ", mrpPrice=" + mrpPrice + ", price=" + price + ", discountApplied="
				+ discountApplied + ", quantity=" + quantity + ", giftWrapped=" + giftWrapped + ", productName="
				+ productName + ", getOrder_id()=" + getOrder_id() + ", getOrderItemId()=" + getOrderItemId()
				+ ", getProductId()=" + getProductId() + ", getProductSku()=" + getProductSku() + ", getMrpPrice()="
				+ getMrpPrice() + ", getPrice()=" + getPrice() + ", getDiscountApplied()=" + getDiscountApplied()
				+ ", getQuantity()=" + getQuantity() + ", getGiftWrapped()=" + getGiftWrapped() + ", getProductName()="
				+ getProductName() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}

}
