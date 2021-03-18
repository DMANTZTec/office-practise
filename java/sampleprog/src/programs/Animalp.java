package programs;

public class Animalp {
		  public void animalSound() {
		    System.out.println("The animal makes a sound");
		  }
		}

		class Pig extends Animalp {
		  public void animalSound() {
		    System.out.println("The pig says: wee wee");
		  }
		}

		class cat extends Animalp {
		  public void animalSound() {
		    System.out.println("The cat says: Meow Meow");
		  }
		}


