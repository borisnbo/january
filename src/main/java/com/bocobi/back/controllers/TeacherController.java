package com.bocobi.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bocobi.back.models.Teacher;
import com.bocobi.back.repos.TeacherRepos;

@RestController
@CrossOrigin
public class TeacherController {
	
	@Autowired
	private TeacherRepos teacherRepos;

	@GetMapping("/teachers")
	public List<Teacher> getTeacher() {
		return teacherRepos.findAll();
	}
	
	@PostMapping("/teachers")
	public Teacher saveTeacher(@RequestBody Teacher facture) {
		return teacherRepos.save(facture);
	}

}
