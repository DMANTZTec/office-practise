package samplePrograms;

public class ThreadPriority {
	public static void main(String[] args) {
		
		 
		 
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
		 
		 t1.setPriority(Thread.MAX_PRIORITY);
		 t2.setPriority(Thread.MIN_PRIORITY);
		 
		 System.out.println("t1 Thread Priority:"+t1.getPriority());
		 System.out.println("t2 Thread Priority:"+t2.getPriority());
		 
		 t1.start();
		 
		 try { Thread.sleep(10);} catch(Exception e) {}
		 
		 t2.start();
	}
	
}



