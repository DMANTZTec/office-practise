package programs;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Collection4 {

	public static void main(String[] args) {

		Map<String, String> map = new HashMap<>();
		map.put("Name", "John");
		map.put("Sub", "Java");

		Set<String> keys = map.keySet();

		for (String key : keys) {
			System.out.println(key + "  " + map.get(key));

		}
	}

}
