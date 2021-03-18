package programs;

public class Car {
String carname;
String color;

public Car(String carname, String color)
{
	this.carname= carname;
	this.color=color;	
}
public String carname() {
	return carname;
}
public String color() {
	return color;
	
}
public String toString()
{
	return(this.carname()+","+this.color());
}
public static void main(String[] args) {
Car myCar=new Car("audi","black");
System.out.println(myCar.toString());
}
}
