package com.dmantznr.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dmantznr.model.User;
import com.dmantznr.repository.PasswordResetTokenRepository;
import com.dmantznr.repository.RoleRepository;
import com.dmantznr.repository.UserRepository;
import com.dmantznr.security.PasswordResetToken;
import com.dmantznr.security.UserRole;
import com.dmantznr.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private RoleRepository roleRepository;
	 @Autowired 
	 private PasswordResetTokenRepository passwordResetTokenRepository;
	 
	 @Autowired
	 private UserRepository userRepository;
	 
	@Override
	public PasswordResetToken getPasswordResetToken(final String token) {
		return PasswordResetTokenRepository.findByToken(token);
	}

	@Override
	public void createPasswordResetTokenForUser(final User user,final String token) {
		final PasswordResetToken myToken=new PasswordResetToken(token, user);
		passwordResetTokenRepository.save(myToken);
		
	}

	@Override
	public User findByUsername(String username) {
		
		return userRepository.findByUsername(username);
	}

	

	@Override
	public  User createUser(User user, Set<UserRole> userRoles) throws Exception {
		User localUser = userRepository.findByUsername(user.getUsername());
		if(localUser !=null) {
			throw new Exception("User already exists. Nothing will be done");
			
		}else {
		for (UserRole ur: userRoles) {
			roleRepository.save(ur.getRole());
			
		}
		user.getUserRoles().addAll(userRoles);
		localUser=userRepository.save(user);
		
		}
		return localUser;
		
	}

	@Override
	public User findByEmail(String email) {
		
		return userRepository.findByEmail(email);
	}

}
