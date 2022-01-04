package com.bocobi.back.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bocobi.back.models.Classe;

@Repository
public interface ClasseRepos extends JpaRepository<Classe, Integer>  {

}
