package programs;
import java.util.Scanner;

public class UserInput {
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		System.out.println("Enter Name, Age, and Salary:");
		String name = scan.nextLine();
		int age= scan.nextInt();
		int salary= scan.nextInt();
		System.out.println("Name: "+name);
		System.out.println("Age: "+age);
		System.out.println("Salary: "+salary);
	}

}
