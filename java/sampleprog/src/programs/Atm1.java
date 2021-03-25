package programs;
import java.util.Scanner;

public class Atm1  {

	
	
public static void main(String[] args) {
	
	int balance=3000;
	int accountNumber = 558;
	//int accountNumber1= 559;
	//int accountNumber2=560;
	int withdraw, deposit;
	
	
	
Scanner s = new Scanner(System.in);


System.out.println("Enter Account Number");
int accnum=s.nextInt();
System.out.println("");

if(accountNumber == accnum)
{
	System.out.println("");
		}
else {
	System.out.println("Invalid Account Number");
	System.exit(0);
}
while(true) {

System.out.println("Choose Option");
System.out.println("");

System.out.println("1.Check Balance");
System.out.println("2.Withdraw");
System.out.println("3.Deposit");
System.out.println("4.Exit");

System.out.println("");

System.out.println("Enter Your Option");

int options = s.nextInt();

 switch(options) {
 
 case 1:
	 System.out.println("Balance:" +balance);
	 System.out.println("");
	 break;
   
 case 2:
	 System.out.println("Enter Amount");
	 withdraw =s.nextInt();
	 
	 if(balance>=withdraw) {
		 balance = balance-withdraw;
		 System.out.println("Please Collect your Money");
		 System.out.println("Balance" +balance);
		 System.out.println("");
	 }
	 else {
		 System.out.println("Insufficient Amount");
		 System.out.println("");
	 }
	 break;
	 
 case 3:
	 System.out.println("Enter Money");
	 
	 deposit = s.nextInt();
	 balance = balance+deposit;
	 
	 System.out.println("Balance" +balance);
	 System.out.println("");
	 break;
	 
 case 4:
	 System.exit(0);
	 break;
 }
}
}
}

