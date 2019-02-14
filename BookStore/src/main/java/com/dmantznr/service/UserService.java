package com.dmantznr.service;



import java.util.Set;

import org.springframework.stereotype.Service;

import com.dmantznr.model.User;
import com.dmantznr.security.PasswordResetToken;
import com.dmantznr.security.UserRole;

@Service
public interface UserService {

	PasswordResetToken getPasswordResetToken( final String token);
	void createPasswordResetTokenForUser(final User user, final String token);
	User findByUsername(String username);
	User findByEmail(String email);
	User createUser(User user, Set<UserRole> userRoles) throws Exception;

}
