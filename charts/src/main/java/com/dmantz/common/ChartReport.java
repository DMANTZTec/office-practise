package com.dmantz.common;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="marks")
public class ChartReport {
@Id
private Integer id;
private String name;
private Integer english;
private Integer hindi;
private Integer telugu;

public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Integer getEnglish() {
	return english;
}
public void setEnglish(Integer english) {
	this.english = english;
}
public Integer getHindi() {
	return hindi;
}
public void setHindi(Integer hindi) {
	this.hindi = hindi;
}
public Integer getTelugu() {
	return telugu;
}
public void setTelugu(Integer telugu) {
	this.telugu = telugu;
}


}
