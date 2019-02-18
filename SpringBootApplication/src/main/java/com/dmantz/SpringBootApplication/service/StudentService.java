package com.dmantz.SpringBootApplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dmantz.SpringBootApplication.model.Student;
import com.dmantz.SpringBootApplication.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;

	// to save an student
	
	public Student save(Student std) {
		return studentRepository.save(std);
		
	}
	
	//search all students
	
	public List<Student> getAllStudents(){
		return studentRepository.findAll();
	}
	
	//get student by id
	
	public Student findOne(Integer id) {
		return studentRepository.getOne(id);
	}
	// delete an student
	public void delete(Student id) {
		studentRepository.delete(id);
	}
}
