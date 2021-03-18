package programs;

 public class staticpublic {
	static void staticmethod() {
		System.out.println("static method");
	}
	public void publicmethod() {
		System.out.println("public method");
	}
public static void main(String[] args) {
	staticmethod();
	staticpublic stat = new staticpublic();
	stat.publicmethod();

}
}
