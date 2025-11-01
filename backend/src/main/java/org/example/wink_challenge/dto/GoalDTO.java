package org.example.wink_challenge.dto;

import java.time.LocalDate;
import java.util.List;

public class GoalDTO {
    private long id;
    private String name;
    private String description;
    private String expectedResult;
    private LocalDate deadline;
    private boolean isDone;
    private List<TaskDTO> tasks;

    // Конструкторы, геттеры, сеттеры
    public GoalDTO() {
    }

    public GoalDTO(long id, String name, String description, String expectedResult, LocalDate deadline, boolean isDone, List<TaskDTO> tasks) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.expectedResult = expectedResult;
        this.deadline = deadline;
        this.isDone = isDone;
        this.tasks = tasks;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getExpectedResult() {
        return expectedResult;
    }

    public void setExpectedResult(String expectedResult) {
        this.expectedResult = expectedResult;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public List<TaskDTO> getTasks() {
        return tasks;
    }

    public void setTasks(List<TaskDTO> tasks) {
        this.tasks = tasks;
    }
}
