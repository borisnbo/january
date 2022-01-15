package com.bocobi.back.models;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Classe {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String name;

	@ManyToOne
	public Level level;

	@ManyToOne
	public Serie serie;
	
	
	
}