package com.dmantznr.service;

import java.util.Set;

import com.dmantznr.model.User;
import com.dmantznr.security.UserRole;

public interface UserService {
	
	User createUser(User user, Set<UserRole> userRoles);

}
