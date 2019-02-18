package com.dmantz.SpringBootApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dmantz.SpringBootApplication.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
