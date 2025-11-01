package org.example.wink_challenge.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "goals")
public class GoalEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false, name = "expected_result")
    private String expectedResult;

    @Column(nullable = false)
    private LocalDate deadline;

    @Column(nullable = false, name = "is_done")
    @ColumnDefault("false")
    private boolean isDone;

    @OneToMany(mappedBy = "goal", cascade = CascadeType.ALL)
    @Column(nullable = false)
    private List<TaskEntity> tasks = new ArrayList<>();

    public GoalEntity() {
    }

    public GoalEntity(long id, String name, String description, LocalDate deadline, boolean isDone, List<TaskEntity> tasks, String expectedResult) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.expectedResult = expectedResult;
        this.deadline = deadline;
        this.isDone = isDone;
        this.tasks = tasks;
    }

    public void addTask(TaskEntity task) {
        tasks.add(task);
        task.setGoal(this);
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getExpectedResult() {
        return expectedResult;
    }

    public List<TaskEntity> getTasks() {
        return tasks;
    }

    public void setExpectedResult(String expectedResult) {
        this.expectedResult = expectedResult;
    }

    public void setTasks(List<TaskEntity> tasks) {
        this.tasks = tasks;
    }


}
