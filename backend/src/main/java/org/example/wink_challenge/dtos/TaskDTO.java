package org.example.wink_challenge.dtos;

import java.time.LocalDate;

public class TaskDTO {
    private long id;
    private String name;
    private String description;
    private LocalDate deadline;
    private String priority;
    private boolean isDone;
    private long goalId; // Вместо целого GoalEntity

    public TaskDTO() {}

    public TaskDTO(long id, String name, String description, LocalDate deadline,
                   String priority, boolean isDone, Long goalId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.isDone = isDone;
        this.goalId = goalId;
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

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public long getGoalId() {
        return goalId;
    }

    public void setGoalId(long goalId) {
        this.goalId = goalId;
    }
}
