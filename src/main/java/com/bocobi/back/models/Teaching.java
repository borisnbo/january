package com.bocobi.back.models;

import javax.persistence.*;

import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Teaching {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	@ManyToOne
	public Teacher teacher;
	@ManyToOne
	public Classe classe;
	@ManyToOne
	public Course course;
	
	public int coef;
	
}
