package org.example.wink_challenge.controllers;

import org.example.wink_challenge.entities.TaskEntity;
import org.example.wink_challenge.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping(path="/api/tasks")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public TaskEntity createTask(@RequestBody TaskEntity task) {
        return taskService.saveTask(task);
    }

    @GetMapping("/all")
    public List<TaskEntity> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/get/id/{id}")
    public TaskEntity getTaskById(@PathVariable long id) {return taskService.getTaskById(id);}

    @GetMapping("/get/is-done/{isDone}")
    public List<TaskEntity> getTasksByIsDone(@PathVariable boolean isDone) {return taskService.getTasksByIsDoneTasks(isDone);}

    @GetMapping("/get/name/{name}")
    public TaskEntity getTaskByName(@PathVariable String name) {return taskService.getTaskByName(name);}

    @GetMapping("/get/deadline/{deadline}")
    public List<TaskEntity> getTasksByDeadline(@PathVariable Instant deadline) {return taskService.getTasksByDeadline(deadline);}
}
