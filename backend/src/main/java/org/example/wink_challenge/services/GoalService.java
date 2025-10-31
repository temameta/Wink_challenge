package org.example.wink_challenge.services;

import org.example.wink_challenge.dtos.GoalDTO;
import org.example.wink_challenge.entities.GoalEntity;
import org.example.wink_challenge.entities.TaskEntity;
import org.example.wink_challenge.repositories.GoalRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class GoalService {
    private final GoalRepository goalRepository;

    public GoalService(GoalRepository goalRepository) {
        this.goalRepository = goalRepository;
    }

    public GoalEntity saveTask(GoalEntity goalEntity) {
        return goalRepository.save(goalEntity);
    }

    public List<GoalEntity> getAllGoals() {
        return goalRepository.findAll();
    }

    public GoalEntity getGoalByName(String name) {
        return goalRepository.findByName(name);
    }

    public List<GoalEntity> getGoalsByIsDoneTasks(boolean isDone) {return goalRepository.findAllByIsDone(isDone);}

    public List<GoalEntity> getGoalsByDeadline(LocalDate deadline) {return goalRepository.findByDeadline(deadline);}

    public GoalEntity getGoalById(long id) {return goalRepository.findById(id);}

    public GoalDTO toDTO(GoalEntity goalEntity) {
        return new GoalDTO(
                goalEntity.getId(),
                goalEntity.getName(),
                goalEntity.getDescription(),
                goalEntity.isDone(),
                goalEntity.getDeadline(),
                goalEntity.getExpectedResult(),
                goalEntity.getTasks()
        );
    }
}
