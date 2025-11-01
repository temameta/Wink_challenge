package org.example.wink_challenge.repositories;

import org.example.wink_challenge.entities.GradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradesRepository extends JpaRepository<GradeEntity, Integer> {

}
