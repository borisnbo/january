package com.bocobi.back.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import antlr.collections.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String name;
	public String surname;
	public String sexe;
	public String dateOfBirth;
	public String grade;

	@OneToMany(cascade = CascadeType.ALL)
	public java.util.List<Course> courses;
	
	@OneToMany(cascade = CascadeType.ALL)
	public java.util.List<Classe> classes;
	
}
