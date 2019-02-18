package com.dmantz.restfulWebServices.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
public class ProductInterceptor implements HandlerInterceptor {
	
	public boolean preHandler(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("Pre Handler mothod is calling");
		return true;
		
		
	}

	public void postHandler(HttpServletRequest request,HttpServletResponse response,Object handler, ModelAndView modelandview) throws Exception{
		System.out.println("Pre PostHandler Method is calling");
		
		
	}
	public void afterCompletion
    (HttpServletRequest request, HttpServletResponse response, Object 
    handler, Exception exception) throws Exception {
    
    System.out.println("Request and Response is completed");
 }
}
