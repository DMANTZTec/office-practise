package samplePrograms;

import java.io.*;
import java.util.*;

public class StudentInfo {

	public static void main(String[] args) throws Exception {

		Thread classA = new Thread(() -> {

			System.out.println("Class A" + "\r\n");

			Scanner sc = new Scanner(System.in);

			System.out.println("Student Name");
			String name = sc.nextLine();

			System.out.println("Subject Name");
			String subname = sc.nextLine();

			System.out.println("Marks");
			int marks = sc.nextInt();

			try {

				File file = new File("C:\\Demo\\ClassA.txt");

				PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

				pw.append(name + "," + subname + "," + marks + "\r\n");

				pw.close();

			} catch (Exception e) {
			}

			if (marks <= 40) {

				try {

					File file = new File("C:\\Demo\\ClassA_Failed.txt");

					PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

					pw.append(name + "," + subname + "," + marks + "\r\n");

					pw.close();

				} catch (Exception e) {
				}

			} else {

				try {

					File file = new File("C:\\Demo\\ClassA_Passed.txt");

					PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

					pw.append(name + "," + subname + "," + marks + "\r\n");

					pw.close();

				} catch (Exception e) {
				}

			}
		});

		Thread classB = new Thread(() -> {

			System.out.println("Class B" + "\r\n");

			Scanner sc = new Scanner(System.in);

			System.out.println("Student Name");
			String name = sc.nextLine();

			System.out.println("Subject Name");
			String subname = sc.nextLine();

			System.out.println("Marks");
			int marks = sc.nextInt();

			try {

				File file = new File("C:\\Demo\\ClassB.txt");

				PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

				pw.append(name + "," + subname + "," + marks + "\r\n");

				pw.close();

			} catch (Exception e) {
			}

			if (marks <= 40) {

				try {

					File file = new File("C:\\Demo\\ClassB_Failed.txt");

					PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

					pw.append(name + "," + subname + "," + marks + "\r\n");

					pw.close();

				} catch (Exception e) {
				}

			} else {

				try {

					File file = new File("C:\\Demo\\ClassB_Passed.txt");

					PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

					pw.append(name + "," + subname + "," + marks + "\r\n");

					pw.close();

				} catch (Exception e) {
				}

			}
		});

		Thread classC = new Thread(() -> {

			System.out.println("Class C" + "\r\n");

			Scanner sc = new Scanner(System.in);

			System.out.println("Student Name");
			String name = sc.nextLine();

			System.out.println("Subject Name");
			String subname = sc.nextLine();

			System.out.println("Marks");
			int marks = sc.nextInt();

			try {

				File file = new File("C:\\Demo\\ClassC.txt");

				PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

				pw.append(name + "," + subname + "," + marks + "\r\n");

				pw.close();

			} catch (Exception e) {
			}

			if (marks <= 40) {

				try {

					File file = new File("C:\\Demo\\ClassC_Failed.txt");

					PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

					pw.append(name + "," + subname + "," + marks + "\r\n");

					pw.close();

				} catch (Exception e) {
				}

			} else {

				try {

					File file = new File("C:\\Demo\\ClassC_Passed.txt");

					PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));

					pw.append(name + "," + subname + "," + marks + "\r\n");

					pw.close();

				} catch (Exception e) {
				}

			}
		});

		classA.start();
		classA.join();

		classB.start();
		classB.join();

		classC.start();
		classC.join();

	}

}
