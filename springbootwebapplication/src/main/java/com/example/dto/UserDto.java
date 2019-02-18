package com.example.dto;

import java.util.ArrayList;
import java.util.List;

public class UserDto {

	   Integer userId;
	    String userName;
	    List<SkillDto> skillDtos= new ArrayList<>();
	    public UserDto(Integer userId, String userName, List<SkillDto> skillDtos) {
	        this.userId = userId;
	        this.userName = userName;
	        this.skillDtos = skillDtos;
	    }
	    public UserDto() {
	    }
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
	    public List<SkillDto> getSkillDtos() {
	        return skillDtos;
	    }
	    public void setSkillDtos(List<SkillDto> skillDtos) {
	        this.skillDtos = skillDtos;
	    }
	}
	public class SkillDto {
	    Integer skillId;
	    String SkillName;
	    public SkillDto(Integer skillId, String skillName) {
	        this.skillId = skillId;
	        SkillName = skillName;
	    }
	    public SkillDto() {
	    }
	    public Integer getSkillId() {
	        return skillId;
	    }
	    public void setSkillId(Integer skillId) {
	        this.skillId = skillId;
	    }
	    public String getSkillName() {
	        return SkillName;
	    }
	    public void setSkillName(String skillName) {
	        SkillName = skillName;
	    }
	}

