package com.bocobi.back.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bocobi.back.models.Teacher;

@Repository
public interface TeacherRepos extends JpaRepository<Teacher, Integer> {

}
