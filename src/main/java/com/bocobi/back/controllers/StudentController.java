package com.bocobi.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bocobi.back.models.Student;
import com.bocobi.back.repos.StudentRepos;

@RestController
@CrossOrigin
@RequestMapping("/me")
public class StudentController {

	
	@Autowired
	private StudentRepos studentRepos;

	@GetMapping("/students")
	public List<Student> getStudent() {
		return studentRepos.findAll();
	}

	@PostMapping("/students")
	public Student saveStudent(@RequestBody Student student) {
		return studentRepos.save(student);
	}

	@GetMapping("/students/{id}")
	public Student findEmployeById(@PathVariable int student) {
		return studentRepos.findById(student).orElse(null);
	}
	
	@DeleteMapping("/students/{id}")
	public String deleteStudent(@PathVariable int student) {
		studentRepos.deleteById(student);
		return "Suprimer avec success"+student;
	}
	
}
