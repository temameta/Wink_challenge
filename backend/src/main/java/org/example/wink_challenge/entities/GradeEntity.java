package org.example.wink_challenge.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "grades")
public class GradeEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    @NotNull
    private Person sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id")
    @NotNull
    private Person receiver;

    @ManyToOne
    @JoinColumn(name = "goal_id")
    @NotNull
    private GoalEntity goal;

    @Column(name = "grade")
    private int grade;

    @Column(name = "is_graded")
    private boolean graded;

    @Column(name = "comment")
    private String comment;

    public GradeEntity() {
    }

    public GradeEntity(int id, Person sender, Person receiver, GoalEntity goal, boolean graded) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.goal = goal;
        this.graded = graded;
    }

    public GradeEntity(int id, Person sender, Person receiver, GoalEntity goal, int grade, boolean graded, String comment) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.goal = goal;
        this.grade = grade;
        this.graded = graded;
        this.comment = comment;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Person getSender() {
        return sender;
    }

    public void setSender(Person sender) {
        this.sender = sender;
    }

    public Person getReceiver() {
        return receiver;
    }

    public void setReceiver(Person receiver) {
        this.receiver = receiver;
    }

    public GoalEntity getGoal() {
        return goal;
    }

    public void setGoal(GoalEntity goal) {
        this.goal = goal;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public boolean isGraded() {
        return graded;
    }

    public void setGraded(boolean graded) {
        this.graded = graded;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
