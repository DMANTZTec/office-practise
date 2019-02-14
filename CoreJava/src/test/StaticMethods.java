package test;

public class StaticMethods {
	
	public static void main(String[] args) {
		System.out.println("Inside main");
		StaticMethods.method1();
	}
	static void method1() {
		System.out.println("Inside method");
	}
	static {
		System.out.println("Inside static block");
		StaticMethods.method1();
	}

}
