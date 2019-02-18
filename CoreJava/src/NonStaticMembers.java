package src;

public class NonStaticMembers {
 int x;
 
 NonStaticMembers(){
	 System.out.println("inside constructor");
 }
 {
	 System.out.println("inside non-static block");
 
 }
 public static void main(String[] args) {
	System.out.println("inside main");
	new NonStaticMembers();
	new NonStaticMembers();
	new NonStaticMembers();
	
}
 
}
