package programs;

public class Games implements Runnable  {
public static void main(String[] args) {
	Thread car = new Thread("Cars"); 
	Thread bike = new Thread("Bikes");
	car.start();
	bike.start();
	System.out.println(car.getName());
	System.out.println(bike.getName());
	
}

public void run() {
	
}
}
