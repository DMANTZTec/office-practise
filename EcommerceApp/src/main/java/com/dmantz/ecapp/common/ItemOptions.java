package com.dmantz.ecapp.common;

public class ItemOptions {
	private String itemOptionId;
	private String itemOptionName;
	  private String itemOptionValue;

	  public String getItemOptionId() {
		return itemOptionId;
	}
	public void setItemOptionId(String itemOptionId) {
		this.itemOptionId = itemOptionId;
	}
	public String getItemOptionName() {
		return itemOptionName;
	}
	public void setItemOptionName(String itemOptionName) {
		this.itemOptionName = itemOptionName;
	}
	public String getItemOptionValue() {
		return itemOptionValue;
	}
	public void setItemOptionValue(String itemOptionValue) {
		this.itemOptionValue = itemOptionValue;
	}
	@Override
	public String toString() {
		return "ItemOptions [itemOptionId=" + itemOptionId + ", itemOptionName=" + itemOptionName + ", itemOptionValue="
				+ itemOptionValue + ", getItemOptionId()=" + getItemOptionId() + ", getItemOptionName()="
				+ getItemOptionName() + ", getItemOptionValue()=" + getItemOptionValue() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
