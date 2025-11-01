package org.example.wink_challenge.services;

import org.example.wink_challenge.dto.GoalDTO;
import org.example.wink_challenge.dto.TaskDTO;
import org.example.wink_challenge.entities.GoalEntity;
import org.example.wink_challenge.entities.Person;
import org.example.wink_challenge.entities.TaskEntity;
import org.example.wink_challenge.repositories.GoalRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class GoalService {
    private final GoalRepository goalRepository;
    private final TaskService taskService;

    public GoalService(GoalRepository goalRepository, TaskService taskService) {
        this.goalRepository = goalRepository;
        this.taskService = taskService;
    }

    public GoalEntity saveGoal(GoalEntity goalEntity) {

        return goalRepository.save(goalEntity);
    }

    public List<GoalEntity> getAllGoals() {
        return goalRepository.findAll();
    }

    public GoalEntity getGoalByName(String name) {
        return goalRepository.findByName(name);
    }

    public List<GoalEntity> getGoalsByIsDoneTasks(boolean isDone) {
        return goalRepository.findAllByIsDone(isDone);
    }

    public List<GoalEntity> getGoalsByDeadline(LocalDate deadline) {
        return goalRepository.findByDeadline(deadline);
    }

    public GoalEntity getGoalById(long id) {
        return goalRepository.findById(id);
    }

    public GoalDTO toGoalDTO(GoalEntity goalEntity) {
        List<TaskDTO> taskDTOs = new ArrayList<>();
        for (TaskEntity taskEntity : goalEntity.getTasks()) {
            taskDTOs.add(taskService.toTaskDTO(taskEntity));
        }

        return new GoalDTO(
                goalEntity.getId(),
                goalEntity.getName(),
                goalEntity.getDescription(),
                goalEntity.getExpectedResult(),
                goalEntity.getDeadline(),
                goalEntity.isDone(),
                taskDTOs
        );
    }

    public GoalEntity toGoalEntity(GoalDTO goalDTO, Person owner) {
        GoalEntity goalEntity = new GoalEntity();
        goalEntity.setName(goalDTO.getName());
        goalEntity.setDescription(goalDTO.getDescription());
        goalEntity.setExpectedResult(goalDTO.getExpectedResult());
        goalEntity.setDeadline(goalDTO.getDeadline());
        List<TaskEntity> tasksEntity = new ArrayList<>();
        for (TaskDTO taskDTO : goalDTO.getTasks()) {
            TaskEntity taskEntity = taskService.toTaskEntity(taskDTO);
            taskEntity.setGoal(goalEntity);
            tasksEntity.add(taskEntity);
        }
        goalEntity.setTasks(tasksEntity);
        goalEntity.setOwner(owner);
        return goalEntity;
    }

    public List<GoalEntity> getPersonalGoals(Person owner) {
        return goalRepository.findAllByOwner(owner);
    }

}
