package org.example.wink_challenge.controllers;

import org.example.wink_challenge.dto.GoalDTO;
import org.example.wink_challenge.entities.GoalEntity;
import org.example.wink_challenge.entities.Person;
import org.example.wink_challenge.services.GoalService;
import org.example.wink_challenge.services.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="/api/goals")
public class GoalController {

    private final GoalService goalService;
    private final PeopleService peopleService;

    @Autowired
    public GoalController(GoalService goalService, PeopleService peopleService) {
        this.goalService = goalService;
        this.peopleService = peopleService;
    }

    @PostMapping()
    @CrossOrigin(origins = "http://localhost:3000")
    public GoalDTO createGoal(@RequestBody GoalDTO goalDTO, Authentication auth) {

        Person owner = peopleService.findUserByUsername(auth.getName()).get();

        return goalService.toGoalDTO(goalService.saveGoal(goalService.toGoalEntity(goalDTO, owner)));
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

    @GetMapping("/get/personal-goals")
    public List<GoalDTO> getPersonalGoals(Authentication auth) {
        Person owner = peopleService.findUserByUsername(auth.getName()).get();

        List<GoalDTO> goalDTOS = new ArrayList<>();
        for(GoalEntity goalEntity : goalService.getPersonalGoals(owner)) {
            goalDTOS.add(goalService.toGoalDTO(goalEntity));
        }

        return goalDTOS;
    }
}
