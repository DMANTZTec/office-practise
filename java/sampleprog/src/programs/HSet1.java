package programs;

import java.util.HashSet;

public class HSet1 {
	public static void main(String[] args) {
		HashSet<String> studname = new HashSet<String>();
		studname.add("Tom");
		studname.add("Jerry");
		studname.add("Jhon");
		
		for(String i: studname) {
			System.out.println(i);
		}
		
		
	}

}
