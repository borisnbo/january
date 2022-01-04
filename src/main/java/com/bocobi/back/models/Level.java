package com.bocobi.back.models;

import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Level {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String name;
	
	@OneToMany(cascade = CascadeType.ALL)
	public List<Student> students;
	
	@OneToMany(cascade = CascadeType.ALL)
	public List<Course> courses;

	@OneToMany(cascade = CascadeType.ALL)
	public List<Teacher> teachers;
	
	@OneToMany(cascade = CascadeType.ALL)
	public List<Classe> classes;
	
}
