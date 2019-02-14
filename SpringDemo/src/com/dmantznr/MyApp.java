package com.dmantznr;

public class MyApp {
	public static void main(String[] args) {
		
		//creating Object
		
		Coach coach=new BaseballCoach();
		Coach theCoach=new TrackCoach();
		
		//use the Object
		
		System.out.println(coach.getDailyWorkout());
		System.out.println(theCoach.getDailyWorkout());
	}

}
