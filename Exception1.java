package programs;

public class Exception1 {
	
	public static void main(String[] args) {
		try {
			int i=6;
			int j=0;
			int k = i/j;
			System.out.println("The K value is:" +k);
		}
		catch(Exception e) {
			System.out.println("Error");
		}
		finally {
			System.out.println("Bye");
		}
	}

}
