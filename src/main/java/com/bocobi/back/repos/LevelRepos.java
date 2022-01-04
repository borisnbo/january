package com.bocobi.back.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bocobi.back.models.Level;

public interface LevelRepos extends JpaRepository<Level, Integer> {

}
