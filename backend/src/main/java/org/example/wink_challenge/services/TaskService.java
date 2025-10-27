package org.example.wink_challenge.services;

import org.example.wink_challenge.entities.TaskEntity;
import org.example.wink_challenge.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public TaskEntity saveTask(TaskEntity taskEntity) {
        return taskRepository.save(taskEntity);
    }

    public List<TaskEntity> getAllTasks() {
        return taskRepository.findAll();
    }

    public TaskEntity getTaskByName(String name) {
        return taskRepository.findByName(name);
    }

    public List<TaskEntity> getTasksByIsDoneTasks(boolean isDone) {return taskRepository.findByIsDone(isDone);}

    public List<TaskEntity> getTasksByDeadline(Instant deadline) {return taskRepository.findByDeadline(deadline);}

    public TaskEntity getTaskById(long id) {return taskRepository.findById(id);}
}
