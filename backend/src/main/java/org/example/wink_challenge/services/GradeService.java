package org.example.wink_challenge.services;

import org.example.wink_challenge.dto.GoalDTO;
import org.example.wink_challenge.dto.GradeDTO;
import org.example.wink_challenge.dto.PersonDTO;
import org.example.wink_challenge.entities.GradeEntity;
import org.example.wink_challenge.entities.Person;
import org.example.wink_challenge.repositories.GradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GradeService {

    private final GradesRepository gradesRepository;
    private final PeopleService peopleService;
    private final GoalService goalService;

    @Autowired
    public GradeService(GradesRepository gradesRepository, PeopleService peopleService, GoalService goalService) {
        this.gradesRepository = gradesRepository;
        this.peopleService = peopleService;
        this.goalService = goalService;
    }

    public void createGrades(List<PersonDTO> people, int goalId, String senderName) {
        List<GradeDTO> grades = new ArrayList<>();
        Person sender = peopleService.findUserByUsername(senderName).get();

        for (PersonDTO p : people) {
            GradeEntity gradeEntity = new GradeEntity();
            gradeEntity.setReceiver(peopleService.convertToPerson(p));
            gradeEntity.setSender(sender);
            gradeEntity.setGraded(false);
            gradeEntity.setGoal(goalService.getGoalById(goalId));

            gradesRepository.save(gradeEntity);
        }
    }

    public void doGrade() {

    }
}
