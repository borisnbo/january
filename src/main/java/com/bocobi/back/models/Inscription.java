package com.bocobi.back.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//on recuperera le montant de la pension dans la table niveau.
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Inscription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	
	@ManyToOne
	public Classe classe;
	@ManyToOne
	public Student student;
	@ManyToOne
	public AnneeScolaire anneeScolaire;
	
	public int firstTranche;//on mettra une valeur initiale, avant une certaine valeur pour chacune des tranches..
	public int secondTranche;
}
