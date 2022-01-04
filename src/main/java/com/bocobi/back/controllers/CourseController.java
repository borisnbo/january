package com.bocobi.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bocobi.back.repos.courseRepos;
import com.bocobi.back.models.Course;

@RestController
@CrossOrigin
public class CourseController {
	
	@Autowired
	private courseRepos courseRepos;

	@GetMapping("/course")
	public List<Course> getCourse() {
		return courseRepos.findAll();
	}
	
	@PostMapping("/course")
	public Course saveCourse(@RequestBody Course facture) {
		return courseRepos.save(facture);
	}

}
