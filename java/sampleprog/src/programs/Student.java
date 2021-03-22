package programs;

public class Student {
		 public static void main(String args[]) {
		 	StudentArr[] arr;
		 	arr=new StudentArr[5];
		 	arr[0]=new StudentArr(1,"aman");
		 	arr[1]=new StudentArr(2,"vaibhav");
		 	arr[2]=new StudentArr(1,"shikar");
		 	arr[3]=new StudentArr(1,"dharmesh");
		 	arr[4]=new StudentArr(1,"mohit");
		 	 for (int i = 0; i < arr.length; i++) 
		          System.out.println("Element at " + i + " : " + 
		                      arr[i].roll_no +" "+ arr[i].name);
		 	
		 }
		 }

