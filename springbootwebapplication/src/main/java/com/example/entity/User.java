package com.example.entity;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class User {
	 private static final long serialVersionUID = 0x62A6DA99AABDA8A8L;
	 @Column
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 @Id
	 private Integer userId;
	     @Column
	     private String userName;
	     @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	     private List<Skill> skills= new LinkedList<>();
	     public Integer getUserId() {
	         return userId;
	     }
	     public void setUserId(Integer userId) {
	         this.userId = userId;
	     }
	     public String getUserName() {
	         return userName;
	     }
	     public void setUserName(String userName) {
	         this.userName = userName;
	     }
	     public List<Skill> getSkills() {
	         return skills;
	     }
	     public void setSkills(List<Skill> skills) {
	         this.skills = skills;
	     }
	     public User() {
	     }
	     public User(String userName, List<Skill> skills) {
	         this.userName = userName;
	         this.skills = skills;
	     }
	 }
	 @Entity
	 public class Skill {
	     @Column
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 @Id
	 private Integer skillId;
	     @Column
	     private String skillName;
	     @ManyToOne
	     private User user;
	     public Skill(String skillName) {
	 this.skillName = skillName;
	 }
	 public Integer getSkillId() {
	         return skillId;
	     }
	     public void setSkillId(Integer skillId) {
	         this.skillId = skillId;
	     }
	     public String getSkillName() {
	         return skillName;
	     }
	     public void setSkillName(String skillName) {
	         this.skillName = skillName;
	     }
	     public User getUser() {
	         return user;
	     }
	     public void setUser(User user) {
	         this.user = user;
	     }
	     public Skill() {
	     }
	     public Skill(String skillName, User user) {
	         this.skillName = skillName;
	         this.user = user;
	     }
	 }

