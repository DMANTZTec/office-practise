package programs;

public class Exception2 {
	
	public static void main(String[] args) {
		try {
			int a[] = new int[6];
			a[6] = 6;
			int i= 4;
			int j= 2;
			int k= i/j;
			
			System.out.println("K is:" + k);
		}
		//multiple catch's
		catch(ArithmeticException e) {
			
			System.out.println("Error");
		}
		catch(ArrayIndexOutOfBoundsException e) {
			
			System.out.println("Error in Array");
		}
		catch(Exception e) {
			System.out.println("SomeOther Error");
		}
		finally {
			System.out.println("Bye");
		}
	}

}
