package com.dmantznr.utility;

import java.util.Locale;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;
import java.util.Properties;

import com.dmantznr.model.User;

@Component
public class MailConstructor {

	@Autowired
	private System system;

	public SimpleMailMessage constructResetTokenEmail(String contextPath, Locale locale, String token, User user,
			String password) {
		String url = contextPath ="/newUser?token="+token;
		String message="\nPlease click on this link to verify your email and edit your personal information. Your password is : \n"+password;
		SimpleMailMessage email=new SimpleMailMessage();
		email.setTo(user.getEmail());
		email.setSubject("Krishna Bookstore - New User");
		email.setText(url+message);
		email.setFrom(system.getProperty("support.email"));
		return email;
	}

}
