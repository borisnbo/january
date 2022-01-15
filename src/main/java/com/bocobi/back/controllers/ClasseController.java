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

import com.bocobi.back.models.Classe;
import com.bocobi.back.repos.ClasseRepos;

@RestController
@CrossOrigin
@RequestMapping("/me")
public class ClasseController {

	@Autowired
	private ClasseRepos classeRepos;

	@GetMapping("/classe")
	public List<Classe> getClasse() {
		return classeRepos.findAll();
	}
	
	@PostMapping("/classe")
	public Classe saveClasse(@RequestBody Classe classe) {
		return classeRepos.save(classe);
	}


	@GetMapping("/classe/{id}")
	public Classe findClasseById(@PathVariable int classe) {
		return classeRepos.findById(classe).orElse(null);
	}
	
	@DeleteMapping("/classe/{id}")
	public String deleteClasse(@PathVariable int id) {
		classeRepos.deleteById(id);
		
		return "Suprimer avec success"+id;
	}
	
}
