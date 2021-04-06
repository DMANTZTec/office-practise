package samplePrograms;

import java.util.ArrayList;
import java.util.Iterator;

public class Iteraor1 {
	
	public static void main(String[] args) {
		ArrayList names =new ArrayList();
		names.add("Jack");
		names.add("Steve");
		names.add("John");
		
		Iterator itr = names.iterator();
		
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
		
	}

	
}
