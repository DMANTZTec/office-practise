package com.dmantz.springsecurityOAuth2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.dmantz.repository.UserRepository;

@SpringBootApplication(scanBasePackages= {"com.dmantz.controller"})
public class SpringsecurityOAuth2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringsecurityOAuth2Application.class, args);
	}
	public void authenticationManager(AuthenticationManagerBuilder builder,UserRepository repo) throws Exception
	{
		builder.userDetailsService(new UserDetailsService() 
		{

			@Override
			public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
			{
				
				return  new CustomUserDetails(repo.findByUserName(username));
			}
			
		}
		);}
	}

