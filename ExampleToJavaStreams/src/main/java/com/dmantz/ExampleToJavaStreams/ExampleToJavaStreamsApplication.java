package com.dmantz.ExampleToJavaStreams;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExampleToJavaStreamsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExampleToJavaStreamsApplication.class, args);
		List<Product> productsList = new ArrayList<Product>();  
		 productsList.add(new Product(1,"HP Laptop",25000f));  
	        productsList.add(new Product(2,"Dell Laptop",30000f));  
	        productsList.add(new Product(3,"Lenevo Laptop",28000f));  
	        productsList.add(new Product(4,"Sony Laptop",28000f));  
	        productsList.add(new Product(5,"Apple Laptop",90000f));
	        List l=new ArrayList();
	        l.add(1);
	        l.add(5);
	        l.add(2);
	        l.add(4);
	        
	      //  System.out.println(productsList);
	      System.out.println(productsList.stream().filter(p->p.price>=30000).collect(Collectors.toList()));
	      System.out.println(productsList.stream().map(i->(i.price*10)).collect(Collectors.toList()));
	      productsList.stream().filter(product -> product.price == 30000)  
          .forEach(product -> System.out.println(product.name)); 
	     float totalPrice= productsList.stream().map(product->product.price).reduce(0.0f,(sum, price)->sum+price);
          System.out.println(totalPrice);
         double totalPrice1= productsList.stream().collect(Collectors.summingDouble(product->product.price));
         System.out.println(totalPrice1);
        System.out.println(productsList.stream().max((p1,p2)->p1.price>p2.price?1:-1).get());
        System.out.println(productsList.stream().filter(p->p.price>30000).count());
        System.out.println(productsList.stream().collect(Collectors.toMap(p->p.id, p->p.name)));
	}

}