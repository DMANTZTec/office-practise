package programs;

public class Trainlist {
	String trainname;
	int trainnum;
	int trainstarttime;
	int traindeptime;
	
	public Trainlist(String name, int number, int starttime, int deptime) {
		trainname=name;
		trainnum=number;
		trainstarttime = starttime;
		traindeptime=deptime;
		
	}
public static void main(String[] args) {
Trainlist trainlist= new Trainlist("spltarin",754,5,17);
System.out.println("Train name:"+trainlist.trainname+ " Trainnumber:"+trainlist.trainnum+" StartTime"+trainlist.trainstarttime+" DepTime"+trainlist.traindeptime);
}
}
