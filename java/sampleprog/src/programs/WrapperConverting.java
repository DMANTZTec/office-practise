package programs;

public class WrapperConverting {
	
	public static void main(String[] args) {
		
	int a = 5;
	double b = 5.56;
	
	Integer aobj = Integer.valueOf(a);
	Double bobj = Double.valueOf(b);
	
	System.out.println(aobj);
	System.out.println(bobj);
	
	if(aobj instanceof Integer) {
	      System.out.println("An object of Integer is created.");
	    }

	    if(bobj instanceof Double) {
	      System.out.println("An object of Double is created.");
	    }
	
}	
}
	
	

	
	
	


	


