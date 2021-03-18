package programs;

public class Constructor {
	String studname;
	int studnum;
	int studage;
	String studadd;
	
	public Constructor(String studentname, int studentnum, int studentage, String studentadd) {
studname= studentname;
studnum= studentnum;
studage=studentage;
studadd=studentadd;
	}
	public static void main(String[] args) {
		Constructor student=new Constructor("Jerry",558,21,"Vizag");
		System.out.println("name is:"+student.studname+ " " +student.studnum+ " "+student.studage+" "+student.studadd);
	}
	
	
	

}
