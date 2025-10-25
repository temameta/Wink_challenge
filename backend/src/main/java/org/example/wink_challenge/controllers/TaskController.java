package org.example.wink_challenge.controllers;

import org.example.wink_challenge.entities.TaskEntity;
import org.example.wink_challenge.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping
    public TaskEntity createTask(@RequestBody TaskEntity task) {
        return taskService.saveTask(task);
    }

    @GetMapping
    public List<TaskEntity> getAllTasks() {
        return taskService.getAllTasks();
    }
}
