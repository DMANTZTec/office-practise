package programs;

public class Outer {
	class Inner{
		public void show() {
			System.out.println("Inner Class");
			
		}
	}

public static void main(String[] args) {
	Outer.Inner in= new Outer().new Inner();
	in.show();                                              
}
}