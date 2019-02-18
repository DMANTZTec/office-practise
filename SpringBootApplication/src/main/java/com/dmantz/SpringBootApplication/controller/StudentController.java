package com.dmantz.SpringBootApplication.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.dmantz.SpringBootApplication.model.Student;
import com.dmantz.SpringBootApplication.service.StudentService;

@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	// studen Enroll
	@RequestMapping(value="/enroll", method=RequestMethod.GET)
	public String registration(ModelMap model) {
		Student student = new Student();
		model.addAttribute("student", student);
		return "enroll";
	}
	
	@RequestMapping(value="/save",method = RequestMethod.POST)
	public String saveStudent(@Valid Student student,BindingResult result,ModelMap model,RedirectAttributes redirectAttributes) {
		if(result.hasErrors()) {
			System.out.println("has Errors");
			return "enroll";
		}
		studentService.save(student);
		return "redirect:/viewstudents";
}
	@RequestMapping(value="/viewstudents")
	public ModelAndView getAll() {
		List<Student> list=studentService.getAllStudents();
		return new ModelAndView("viewstudents","list",list);
}
	@RequestMapping(value="/editstudent/{id}")
	public String edit (@PathVariable int id,ModelMap model) {
		Student student=studentService.findOne(id);
		model.addAttribute("student", student);
		return "editstudent";
		
	}
	@RequestMapping(value="/editsave")
	public ModelAndView editsave(@ModelAttribute("student") Student p) {
		Student student=studentService.findOne(p.getId());
		student.setFirstName(p.getFirstName());
		student.setLastName(p.getLastName());
		student.setCountry(p.getCountry());
		student.setEmail(p.getEmail());
		student.setSex(p.getSex());
		studentService.save(student);
		return new ModelAndView("redirect:/viewstudent");
	}
	@RequestMapping(value="/deletestudent/{id}")
	public ModelAndView delete(@PathVariable int id) {
		Student student =studentService.findOne(id);
		studentService.delete(student);
		return new ModelAndView("redirect:/viewstudent");
	}
	@ModelAttribute("section")
	public List<String> section(){
		List<String> sections=new ArrayList<String>() ;
		sections.add("Graduate");
		sections.add("Post Graduate");
		sections.add("Research");
		return sections;
		}
	@ModelAttribute("countries")
	public List<String> country(){
		List<String> countries = new ArrayList<String>();
		countries.add("INDIA");
		countries.add("USA");
		countries.add("CANADA");
		countries.add("GERMANY");
		countries.add("ITALY");
		return countries;
	}
		
	}
