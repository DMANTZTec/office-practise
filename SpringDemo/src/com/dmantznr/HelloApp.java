package com.dmantznr;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HelloApp {
	public static void main(String[] args) {
		
		// load the Spring configuration file
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		//retrieve bean from spring container
		Coach theCoach=context.getBean("myCoach",Coach.class);
		Coach coach=context.getBean("Coach",Coach.class);
		// call methods on the bean
		System.out.println(theCoach.getDailyWorkout());
		System.out.println(coach.getDailyWorkout());
		//close the context
		context.close();
	}

}
