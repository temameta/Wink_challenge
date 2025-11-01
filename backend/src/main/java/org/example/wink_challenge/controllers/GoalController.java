package org.example.wink_challenge.controllers;

import org.example.wink_challenge.entities.GoalEntity;
import org.example.wink_challenge.services.GoalService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(path="/api/goals")
public class GoalController {
    private final GoalService goalService;

    public GoalController(GoalService goalService) {
        this.goalService = goalService;
    }

    @PostMapping()
    @CrossOrigin(origins = "http://localhost:3000")
    public GoalEntity createTask(@RequestBody GoalEntity task) {
        return goalService.saveTask(task);
    }

    @GetMapping("/all")
    public List<GoalEntity> getAllGoals() {
        return goalService.getAllGoals();
    }

    @GetMapping("/get/id/{id}")
    public GoalEntity getGoalById(@PathVariable long id) {return goalService.getGoalById(id);}

    @GetMapping("/get/is-done/{isDone}")
    public List<GoalEntity> getGoalsByIsDone(@PathVariable boolean isDone) {return goalService.getGoalsByIsDoneTasks(isDone);}

    @GetMapping("/get/name/{name}")
    public GoalEntity getGoalsByName(@PathVariable String name) {return goalService.getGoalByName(name);}

    @GetMapping("/get/deadline/{deadline}")
    public List<GoalEntity> getGoalsByDeadline(@PathVariable LocalDate deadline) {return goalService.getGoalsByDeadline(deadline);}
}
