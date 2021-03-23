package programs;

//class
public class TicketReservation implements Runnable{
	
	
	//variables
static int available =100;
static int wanted;


//constructor
public TicketReservation(int wantedTickets) {
	wanted = wantedTickets;
	
}
	public void run() {
		
	}

	
public static void main(String[]args) {
  TicketReservation ticket = new TicketReservation(1);
  System.out.println("Available tickets: " +ticket.available);
  
  if(available>=wanted) {
		System.out.println("Ticket Reserved");
	}
	else {
		System.out.println("Tickets Not Available");
	}
  
	available=available-wanted;
	
	Thread ticket1=new Thread("Reserved For First Person");
	ticket1.start();
	System.out.println(ticket1.getName());
	 System.out.println("Available tickets:" +available);
    }
	
 }




