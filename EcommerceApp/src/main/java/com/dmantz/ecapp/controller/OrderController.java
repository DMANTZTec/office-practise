package com.dmantz.ecapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dmantz.ecapp.request.CreateOrderRequestPO;
import com.dmantz.ecapp.response.OrderResponse;
import com.dmantz.ecapp.service.OrderManagerService;

@RestController
@RequestMapping(value="/EcommerceApp")
public class OrderController {
	
	@Autowired
	OrderManagerService orderManagerService;

	@RequestMapping(value="/createOrder/{orderId}",method=RequestMethod.POST)
	public OrderResponse createOrder(@PathVariable("orderId") int orderId,@RequestBody CreateOrderRequestPO createOrderRequestPO) {
		System.out.println("oderid is"+orderId);
		System.out.println("controller method called");
		System.out.println("request object is"+createOrderRequestPO);
		return orderManagerService.createOrder(orderId,createOrderRequestPO) ;
		
		
		//this is done to learn git
		//sorry mounika
	}
	
	@RequestMapping(value="/createOrder2",method=RequestMethod.POST)
	public CreateOrderRequestPO createOrder2(@RequestBody CreateOrderRequestPO createOrderRequestPO) {

		CreateOrderRequestPO retOrder; 
		System.out.println("request object is"+createOrderRequestPO);		
		return orderManagerService.createOrder2(createOrderRequestPO) ;
		//this is done to learn git
		//sorry mounika
	}
}
