package samplePrograms;

import java.io.*;
import java.util.*;

public class Count {
	public static void main(String[] args) throws Exception {

		// ClassA_Failed
		try {
			int count = 0;
			File file = new File("C:\\Demo\\ClassA_Failed.txt");

			Scanner sc = new Scanner(file);

			while (sc.hasNextLine()) {
				sc.nextLine();
				count++;
			}
			System.out.println("ClassA");
			System.out.println("Subject:Java");
			System.out.println("Number Of Students Failed " + count);

			sc.close();
		} catch (Exception e) {
		}
		// ClassA-Passed
		try {
			int count = 0;
			File file = new File("C:\\Demo\\ClassA_Passed.txt");

			Scanner sc = new Scanner(file);

			while (sc.hasNextLine()) {
				sc.nextLine();
				count++;
			}
			System.out.println("Number Of Students Passed: " + count);

			sc.close();
		} catch (Exception e) {
		}

		// ClassB
		// ClassB_Failed
		try {
			int count = 0;
			File file = new File("C:\\Demo\\ClassB_Failed.txt");

			Scanner sc = new Scanner(file);

			while (sc.hasNextLine()) {
				sc.nextLine();
				count++;
			}
			System.out.println("ClassB");
			System.out.println("Subject:Python");
			System.out.println("Number Of Students Failed " + count);

			sc.close();
		} catch (Exception e) {
		}
		// ClassB-Passed
		try {
			int count = 0;
			File file = new File("C:\\Demo\\ClassB_Passed.txt");

			Scanner sc = new Scanner(file);

			while (sc.hasNextLine()) {
				sc.nextLine();
				count++;
			}
			System.out.println("Number Of Students Passed: " + count);

			sc.close();
		} catch (Exception e) {
		}

		// ClassC
		// ClassC_Failed
		try {
			int count = 0;
			File file = new File("C:\\Demo\\ClassC_Failed.txt");

			Scanner sc = new Scanner(file);

			while (sc.hasNextLine()) {
				sc.nextLine();
				count++;
			}
			System.out.println("ClassC");
			System.out.println("Subject:ED");
			System.out.println("Number Of Students Failed " + count);

			sc.close();
		} catch (Exception e) {
		}
		// ClassC-Passed
		try {
			int count = 0;
			File file = new File("C:\\Demo\\ClassC_Passed.txt");

			Scanner sc = new Scanner(file);

			while (sc.hasNextLine()) {
				sc.nextLine();
				count++;
			}
			System.out.println("Number Of Students Passed: " + count);

			sc.close();
		} catch (Exception e) {
		}

	}
}
