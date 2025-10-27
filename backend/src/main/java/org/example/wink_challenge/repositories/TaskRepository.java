package org.example.wink_challenge.repository_interfaces;

import org.example.wink_challenge.entities.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
    TaskEntity findByName(String name);
}
