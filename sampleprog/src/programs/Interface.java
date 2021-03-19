package programs;

class Demo implements FirstInterface, SecondInterface{
	   public void somementhod() {
		System.out.println("Multiple Interfaces");
	}
	public void anothermethod() {
		System.out.println("Multiple Interfaces");
	}

public static void main(String args[]) {
	Demo multi= new Demo();
	multi.somemethod();
	multi.anothermethod();
}
}