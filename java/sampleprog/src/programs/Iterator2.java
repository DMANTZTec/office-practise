package samplePrograms;

import java.util.ArrayList;
import java.util.Iterator;

public class Iterator2 {
	
	public static void main(String[] args) {
		ArrayList<String> names =new ArrayList();
		names.add("Jack");
		names.add("Steve");
		names.add("John");
		
		Iterator<String> itr = names.iterator();
		
		while(itr.hasNext()) {
			String name= itr.next();
			System.out.println(name);
		       if(name.equals("Steve")) {
				itr.remove();
			}
		}
			for(String name : names) {
				System.out.println(name);
		}
		
	}
}
	

