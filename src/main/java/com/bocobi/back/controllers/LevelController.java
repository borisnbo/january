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

import com.bocobi.back.models.Level;
import com.bocobi.back.repos.LevelRepos;

@RestController
@CrossOrigin
@RequestMapping("/me")
public class LevelController {

	@Autowired
	private LevelRepos levelRepos;
	
	@GetMapping("/level")
	public List<Level> getLevels() {
		return levelRepos.findAll();
	}	
	
	@PostMapping("/level")
	public Level saveLevels(@RequestBody Level level) {
		return levelRepos.save(level);
	}	
	
	@GetMapping("/level/{id}")
	public Level getLevel(@PathVariable int id) {
		return levelRepos.findById(id).orElse(null);
	}
	
	@DeleteMapping("/level/{id}")
	public String deleteLevel(@PathVariable int id) {
		levelRepos.deleteById(id);
		return "Suprimer avec succes !";
	}
}
