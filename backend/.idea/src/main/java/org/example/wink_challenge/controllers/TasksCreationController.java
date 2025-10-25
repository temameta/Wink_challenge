package org.example.wink_challenge.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path="/create-tasks")
public class TasksCreationController {
    @GetMapping
    public String taskCreation() {
        return "create_tasks";
    }
}
