package programs;

public class Outer_Demo {
	private int num=175;
	public class Inner_Demo{
		public int getNum() {
			System.out.println("This is the getnum method of the inner class");
			return num;
			
		}
	}
public static void main(String[] args) {
	Outer_Demo outer=new Outer_Demo();
	Outer_Demo.Inner_Demo inner=new Outer_Demo().new Inner_Demo();
	System.out.println(inner.getNum());
}
}
