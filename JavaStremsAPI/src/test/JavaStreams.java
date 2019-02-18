package test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class JavaStreams {

	public static void main(String[] args) throws IOException {
		
		// 1. Integer Stream
		IntStream
		.range(30, 40)
		.forEach(System.out :: print);
		System.out.println();
		
		//2. Integer Stream with Skip
		
		IntStream
		.range(11, 20)
		.skip(5)
		.forEach(x -> System.out.println(x));
		System.out.println();
		
		// 3. Integer Stream with sum
		System.out.println(
		IntStream
		.range(1, 10)
		.sum());
		System.out.println();
		
		// 4. Stream.of, sorted and findFirst
		
		Stream.of("Krishna","Narasimha","krish")
		.sorted()
		.findFirst()
		.ifPresent(System.out :: println);
		
		// 5. Stream from Array, sort, filter and print
		String[] names= {"krishna","krish","Narasimha","Shashikanth","Mounika","Thirumala"};
		Arrays.stream(names)
		.filter(x -> x.startsWith("k"))
		.sorted()
		.forEach(System.out :: println);
		
		// 6. Averages of squares of an int Array
		Arrays.stream(new int[] {2,4,6,8,10,12,14,16})
		.map(x -> x * x)
		.average()
		.ifPresent(System.out :: println);
		
		// 7. Stream from List, filter and print
		List<String> people = Arrays.asList("Shashikanth","krish","kiran","Narasimha");
		people
		.stream()
		.map(String :: toLowerCase)
		.filter(x -> x.startsWith("s"))
		.forEach(System.out :: println);
		
		// 8 .stream rows from text file, sort, filter, and print
		Stream<String> bands=Files.lines(Paths.get("C:\\Users\\Thinkpad\\Desktop\\bands.txt"));
		bands
		.sorted()
		.filter(x ->x.length() > 10)
		.forEach(System.out ::println);
		bands.close();
		
		//9. Stream rows from text file and save to List
		List<String> bands2=Files.lines(Paths.get("C:\\Users\\Thinkpad\\Desktop\\bands.txt"))
				.filter(x -> x.contains("sh"))
				.collect(Collectors.toList());
				bands2.forEach(x -> System.out.println(x));
				// 10. stream rows from CSV file and count
				Stream<String> row1 = Files.lines(Paths.get("C:\\Users\\Thinkpad\\Desktop\\data.txt"));
				int rowCount=(int)row1
						.map(x ->x.split(","))
						.filter(x -> x.length == 4)
						.count();
				System.out.println(rowCount + "rows.");
				row1.close();
				
				
				// 11. Stream rows from CSV file, parse data from rows
				Stream<String> row2 = Files.lines(Paths.get("C:\\Users\\Thinkpad\\Desktop\\data.txt"));
				row2
				.map(x -> x.split(","))
				.filter(x -> x.length == 3)
				.filter(x -> Integer.parseInt(x[1]) > 2)
				.forEach(x -> System.out.println(x[0]+ " " + x[1] + " " + x[2]));
				row2.close();
	}

}
