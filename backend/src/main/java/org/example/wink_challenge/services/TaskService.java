package org.example.wink_challenge.services;

import org.example.wink_challenge.dtos.TaskDTO;
import org.example.wink_challenge.entities.TaskEntity;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    public TaskDTO toTaskDTO(TaskEntity taskEntity) {
        return new TaskDTO(
                taskEntity.getId(),
                taskEntity.getName(),
                taskEntity.getDescription(),
                taskEntity.getDeadline(),
                taskEntity.getPriority(),
                taskEntity.isDone(),
                taskEntity.getGoal().getId() // Только ID цели
        );
    }

    public TaskEntity toTaskEntity(TaskDTO taskDTO) {
        TaskEntity taskEntity = new TaskEntity();
        taskEntity.setName(taskDTO.getName());
        taskEntity.setDescription(taskDTO.getDescription());
        taskEntity.setDeadline(taskDTO.getDeadline());
        taskEntity.setPriority(taskDTO.getPriority());
        return taskEntity;
    }
}
