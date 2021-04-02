package samplePrograms;

import java.util.HashMap;

public class Hash {
	public static void main(String[] args) {
	//HashMap Object creation
		HashMap<String,String> capitalCities = new HashMap<String,String>();
		
		//adding keys and values
		capitalCities.put("England", "Landon");
		capitalCities.put("Germany","Berlin");
		capitalCities.put("Norway", "Oslo");
	    capitalCities.put("USA", "Washington DC");
	    
	    System.out.println(capitalCities);
	    System.out.println(capitalCities.size());

	    System.out.println(capitalCities.get("USA"));
	    System.out.println("");
	    
	    capitalCities.remove("Germany");
	    System.out.println(capitalCities);
	    
	    System.out.println(capitalCities.size());
	    
	    for(String i : capitalCities.keySet()) {
	    	System.out.println(i);
	    }
	  	System.out.println("");
	    
	    for(String i: capitalCities.values()) {
	    	System.out.println(i);
	    }
	  	System.out.println("");
	  	
	  	for (String i : capitalCities.keySet()) {
	  	  System.out.println("key: " + i + " value: " + capitalCities.get(i));
	  	}
	}
	
}
