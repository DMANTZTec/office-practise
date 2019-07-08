package com.dmantz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication(scanBasePackages= {"com.dmantz.common","com.dmantz.controller","com.dmantz.repository","com.dmantz.services"})

public class ChartsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChartsApplication.class, args);
	}

}
