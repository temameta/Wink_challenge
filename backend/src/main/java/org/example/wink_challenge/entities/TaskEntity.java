package org.example.wink_challenge.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDate;

@Entity
@Table(name = "tasks")
public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "goal_id", nullable = false)
    private GoalEntity goal;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDate deadline;

    @Column(nullable = false)
    private String priority;

    @Column(nullable = false, name = "is_done")
    @ColumnDefault("false")
    private boolean isDone;

    public TaskEntity(long id, GoalEntity goal, String name, String description, LocalDate deadline, String priority, boolean isDone) {
        this.id = id;
        this.goal = goal;
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.isDone = isDone;
    }

    public TaskEntity() {

    }

    public long getId() {
        return id;
    }

    public GoalEntity getGoal() {
        return goal;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setGoal(GoalEntity goal) {
        this.goal = goal;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public String getPriority() {
        return priority;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public void setDone(boolean done) {
        isDone = done;
    }
}

