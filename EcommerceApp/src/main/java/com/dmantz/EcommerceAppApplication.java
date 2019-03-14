package com.dmantz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication(scanBasePackages= {"com.dmantz.ecapp.dao","com.dmantz.ecapp.common","com.dmantz.ecapp.controller","com.dmantz.ecapp.model","com.dmantz.ecapp.response","com.dmantz.ecapp.request","com.dmantz.ecapp.service"})
@EnableSwagger2
public class EcommerceAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceAppApplication.class, args);
	}

}
