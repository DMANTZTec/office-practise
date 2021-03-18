package programs;

public class EncapsTest {
	    public static void main(String args[]){
	         Encapsulation obj = new Encapsulation();
	         obj.setEmpName("Shirisha");
	         obj.setEmpAge(21);
	         obj.setEmpSSN(112233);
	         System.out.println("Employee Name: " + obj.getEmpName());
	         System.out.println("Employee SSN: " + obj.getEmpSSN());
	         System.out.println("Employee Age: " + obj.getEmpAge());
	    } 
	}


