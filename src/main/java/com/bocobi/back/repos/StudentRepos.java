package com.bocobi.back.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bocobi.back.models.Student;

@Repository
public interface StudentRepos extends JpaRepository<Student, Integer> {

}
