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

import com.bocobi.back.models.Teacher;
import com.bocobi.back.repos.TeacherRepos;

@RestController
@CrossOrigin
@RequestMapping("/me")
public class TeacherController {
	
	@Autowired
	private TeacherRepos teacherRepos;

	@GetMapping("/teachers")
	public List<Teacher> getTeacher() {
		return teacherRepos.findAll();
	}

	@PostMapping("/teachers")
	public Teacher saveTeacher(@RequestBody Teacher teacher) {
		return teacherRepos.save(teacher);
	}

	@GetMapping("/teachers/{id}")
	public Teacher findEmployeById(@PathVariable int teacher) {
		return teacherRepos.findById(teacher).orElse(null);
	}
	
	@DeleteMapping("/teachers/{id}")
	public String deleteTeacher(@PathVariable int teacher) {
		teacherRepos.deleteById(teacher);
		return "Suprimer avec success"+teacher;
	}
	
}
