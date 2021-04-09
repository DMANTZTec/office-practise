package programs;

public class Threadmethod1 { 
	public static void main(String[] args) throws Exception {



		 Thread t1 = new Thread(() ->
		 {
			for(int i=1;i<=5;i++) {
				System.out.println("Hey");
				try { Thread.sleep(1000);} catch(Exception e) {}
			}
		}
);
		 Thread t2 = new Thread( () ->
		 {
			for(int i=1;i<=5;i++) {
				System.out.println("Hello");
				try { Thread.sleep(1000);} catch(Exception e) {}
			}
		}
);


		 t1.start();

		 try { Thread.sleep(10);} catch(Exception e) {}

		 t2.start();
		 
		 System.out.println("t1 is Alive:" +t1.isAlive());
		 
		 t1.join();
		 t2.join();
		 
		 System.out.println("t2 is Alive:"+ t2.isAlive());
		 
		 System.out.println("Bye");
	}

}


