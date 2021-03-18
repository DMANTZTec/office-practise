package programs;

class Dog1 extends Animal{
	public void display() {
		System.out.println("My name is" +name);
		
	}
}
class Main1{
	public static void main(String[] args) {
		Dog1 labrador = new Dog1();
		labrador.name="Rohu";
		labrador.display();
		labrador.eat();
		
	}
}
