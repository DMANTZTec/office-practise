package programs;

import java.util.ArrayList;
import java.util.Collection;

public class CollectionDemo {
	public static void main(String[] args) {
		Collection values = new ArrayList();
		values.add(3);
		values.add("Name");
		values.add(7.7);
		
		for(Object i:values) {
			System.out.println(i);
		}
	}
	 
}
