package org.example.wink_challenge.repositories;

import org.example.wink_challenge.entities.GoalEntity;
import org.example.wink_challenge.entities.Person;
import org.example.wink_challenge.entities.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface GoalRepository extends JpaRepository<GoalEntity, Long> {
    GoalEntity findByName(String name);
    List<GoalEntity> findAllByIsDone(boolean isDone);
    List<GoalEntity> findByDeadline(LocalDate deadline);
    GoalEntity findById(long id);

    List<GoalEntity> findAllByOwner(Person owner);
}
