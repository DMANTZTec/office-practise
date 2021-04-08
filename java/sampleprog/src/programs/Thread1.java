package samplePrograms;

class Hi extends Thread{
	public void run() {
		for(int i=1;i<=5;i++) {
			System.out.println("Hi");
		}
	}
}

class Hello extends Thread{
	public void run() {
		for(int i=1;i<=5;i++) {
			System.out.println("Hello");
		}
	}
	
}


public class Thread1 {
	public static void main(String[] args) {
		 Hi obj1 = new Hi();
		 Hello obj2 = new Hello();
		 
		 obj1.start();
		 
		 try { Thread.sleep(1000);} catch(Exception e) {}
		 
		 obj2.start();
	}
	
}


