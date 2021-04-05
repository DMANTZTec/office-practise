package programs;

import java.util.HashSet;

public class HSet2 {
	public static void main(String[] args) {
		
		HashSet<Integer> num =new HashSet<Integer>();
		
		num.add(3);
		num.add(9);
		num.add(6);
		
		for(int i=0 ;i<=10;i++) {
			if(num.contains(i)) {
				System.out.println(i + "found");
				}
			else {
				System.out.println(i + "Not found");
			}
		}
		
	}

}
