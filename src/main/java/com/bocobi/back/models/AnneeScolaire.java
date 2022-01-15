package com.bocobi.back.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnneeScolaire {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	public String start;
	public String end;
	public boolean completed;

}
