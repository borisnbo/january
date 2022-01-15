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

import com.bocobi.back.models.Serie;
import com.bocobi.back.repos.SerieRepos;

@RestController
@CrossOrigin
@RequestMapping("/me")
public class SerieController {


	@Autowired
	private SerieRepos serieRepos;
	
	@GetMapping("/serie")
	public List<Serie> getSeries() {
		return serieRepos.findAll();
	}	
	
	@PostMapping("/serie")
	public Serie saveSeries(@RequestBody Serie serie) {
		return serieRepos.save(serie);
	}	
	
	@GetMapping("/serie/{id}")
	public Serie getSerie(@PathVariable int id) {
		return serieRepos.findById(id).orElse(null);
	}
	
	@DeleteMapping("/serie/{id}")
	public String deleteSerie(@PathVariable int id) {
		serieRepos.deleteById(id);
		return "Suprimer avec succes !";
	}
	
}
