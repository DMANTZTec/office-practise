package programs;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Collection2 {
	public static void main(String[] args) {
		
		List<Integer> values = new ArrayList<>();
		values.add(34);
		values.add(47);
		values.add(34);
		values.add(90);
		
		Collections.sort(values);
		
//		for(int i:values) {
//			System.out.println(i);
//		}
		
		values.forEach(System.out::println);
		
	}
	

}
 