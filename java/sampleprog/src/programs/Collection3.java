package programs;

import java.util.HashSet;
import java.util.Set;

public class Collection3 {
public static void main(String[] args) {
		
		Set<Integer> values = new HashSet<>();
		values.add(34); 
		values.add(47);
		values.add(34);
		values.add(90);
		
		for(int i:values) {
			System.out.println(i);
		}

}
}