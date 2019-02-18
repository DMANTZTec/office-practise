package test;

import java.util.Scanner;

public class BankingApplication {
	public static void main(String[] args) {
		BankAccount obj=new BankAccount("Krishna","123456");
		obj.showMenu();

	}

}

class BankAccount {
	private int balance;
	private int previousTransaction;
	String customerName;
	String customerId;

	BankAccount(String cname, String cid) {
		customerName = cname;
		customerId = cid;

	}

	void deposit(int amount) {
		if (amount != 0) {
			balance = balance + amount;
			previousTransaction = amount;

		}
	}

	void withdraw(int amount) {
		if (amount != 0) {
			balance = balance - amount;
			previousTransaction = -amount;
		}
	}

	void getPreviousTransaction() {
		if (previousTransaction > 0) {
			System.out.println("Deposited: " + previousTransaction);
		} else if (previousTransaction < 0) {
			System.out.println("Withdrawn: " + Math.abs(previousTransaction));

		} else {
			System.out.println("Insufficient funds");
		}
	}

	void showMenu() {
				int choice=0;
				Scanner s=new Scanner(System.in);
				System.out.println("Welcome :" + customerName);
				System.out.println("Your Id is :" + customerId);
				System.out.println("\n");
				System.out.println(" 1.Check Balance\n 2.Deposit\n 3.Withdraw\n 4.PreviousTransaction\n 5.Exit");
				//System.out.println("Enter Your Choice");
				
				do {
					System.out.println("==================================");
					System.out.println("Enter Your Choice");
					System.out.println("==================================");
					choice=s.nextInt();
					System.out.println("\n");
					
					switch(choice) {
					
					case 1:
					System.out.println("---------------------------");
					System.out.println("Balance :"+ balance);
					break;
					
					case 2:
						System.out.println("Enter an Amount to Deposit :");
						int amount=s.nextInt();	
						deposit(amount);
						break;
					case 3 :
						System.out.println("Enter Your Withdraw Amount :");
						int amount1=s.nextInt();
						withdraw(amount1);
						break;
					case 4:
						System.out.println("================================");
						getPreviousTransaction();
						break;
					case 5: 
						System.out.println("**************************");
						break;
					default :
						System.out.println("Invalid option!!. Please Enter Again");
						break;
						
					}
				}
					while(choice !='5') ;
						System.out.println("Thankue For Using our Services");
					
				
				}
	}


				//}
				
		//	}
//}
