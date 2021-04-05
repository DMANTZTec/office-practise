package programs;

import java.util.HashSet;

public class HSet {
  public static void main(String[] args) {
    HashSet<String> cars = new HashSet<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("BMW");
    cars.add("Mazda");
    System.out.println(cars);
  
  System.out.println(cars.contains("BMW"));
  
  cars.remove("Volvo");
  
  System.out.println(cars.size());
  
  System.out.println(cars);
  }
  
}

