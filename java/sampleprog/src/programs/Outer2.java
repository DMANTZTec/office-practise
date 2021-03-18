package programs;

public class Outer2 {
	static class Nested{
		public void my_method() {
			System.out.println("Nested class");
		}
		
	}
public static void main(String args[]) {
	Outer2.Nested nested = new Outer2.Nested();
	nested.my_method();
}
}
