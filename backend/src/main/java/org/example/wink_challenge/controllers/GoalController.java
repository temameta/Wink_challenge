package org.example.wink_challenge.controllers;

import org.example.wink_challenge.dtos.GoalDTO;
import org.example.wink_challenge.dtos.TaskDTO;
import org.example.wink_challenge.entities.GoalEntity;
import org.example.wink_challenge.services.GoalService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path="/api/goals")
public class GoalController {
    private final GoalService goalService;

    public GoalController(GoalService goalService) {
        this.goalService = goalService;
    }

    @PostMapping()
    @CrossOrigin(origins = "http://localhost:3000")
    public GoalDTO createGoal(@RequestBody GoalDTO goalDTO) {
        return goalService.toGoalDTO(goalService.saveGoal(goalService.toGoalEntity(goalDTO)));
    }

    @GetMapping("/all")
    public List<GoalDTO> getAllGoals() {
        List<GoalDTO> goalDTOS = new ArrayList<>();
        for(GoalEntity goalEntity : goalService.getAllGoals()) {
            goalDTOS.add(goalService.toGoalDTO(goalEntity));
        }
        return goalDTOS;
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
