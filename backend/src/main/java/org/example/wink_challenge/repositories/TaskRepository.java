package org.example.wink_challenge.repositories;

import org.example.wink_challenge.entities.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
    TaskEntity findByName(String name);
    List<TaskEntity> findByIsDone(boolean isDone);
    List<TaskEntity> findByDeadline(LocalDate deadline);
    TaskEntity findById(long id);
}
