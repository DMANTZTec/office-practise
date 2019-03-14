package com.dmantz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages= "com.dmantz.repository")
@SpringBootApplication(scanBasePackages= {"com.dmantz.controller","com.dmantz.repository"})
public class ExampleUsingJpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExampleUsingJpaApplication.class, args);
	}

}
