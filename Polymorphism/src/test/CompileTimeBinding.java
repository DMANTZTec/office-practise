package test;

public class CompileTimeBinding {
	void add(int a, int b) {
		int result=(a+b);
		System.out.println("Result is :" +result);
	}
	void add(float a, float b) {
		float result=a+b;
		System.out.println("Result is :" +result);
	}
	void add(int a, int b, int c) {
		int result=(a+b+c);
		System.out.println("Result is :" +result);
		
	}
	public static void main(String[] args) {
		CompileTimeBinding c=new CompileTimeBinding();
		c.add(10, 30);
		c.add(48.2f, 34.2f);
		c.add(65, 43, 75);
	}

}
