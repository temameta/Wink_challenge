package org.example.wink_challenge.dto;

import java.util.List;

public class GradeRequest {

    private List<PersonDTO> people;
    private int goalId;

    public GradeRequest() {
    }

    public GradeRequest(List<PersonDTO> people, int goalId) {
        this.people = people;
        this.goalId = goalId;
    }

    public List<PersonDTO> getPeople() {
        return people;
    }

    public void setPeople(List<PersonDTO> people) {
        this.people = people;
    }

    public int getGoalId() {
        return goalId;
    }

    public void setGoalId(int goalId) {
        this.goalId = goalId;
    }
}
