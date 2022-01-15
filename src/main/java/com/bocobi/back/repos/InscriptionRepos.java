package com.bocobi.back.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bocobi.back.models.Inscription;

public interface InscriptionRepos extends JpaRepository<Inscription, Integer> {

}
