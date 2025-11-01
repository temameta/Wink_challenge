package org.example.wink_challenge.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

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

    @Column(name = "grade_succes")
    private int gradeSuccess;

    @Column(name = "grade_communicate")
    private int gradeCommunicate;

    @Column(name = "is_graded")
    private boolean graded;

    @Column(name = "comment_to_improve")
    private String commentToImprove;

    @Column(name = "comment_compliment")
    private String commentCompliment;

    public GradeEntity() {
    }

    public GradeEntity(int id, Person sender, Person receiver, GoalEntity goal, boolean graded) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.goal = goal;
        this.graded = graded;
    }

    public GradeEntity(int id, Person sender, Person receiver, GoalEntity goal, int gradeSuccess, int gradeCommunicate, boolean graded, String commentToImprove, String commentCompliment) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.goal = goal;
        this.gradeSuccess = gradeSuccess;
        this.gradeCommunicate = gradeCommunicate;
        this.graded = graded;
        this.commentToImprove = commentToImprove;
        this.commentCompliment = commentCompliment;
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

    public int getGradeSuccess() {
        return gradeSuccess;
    }

    public void setGradeSuccess(int grade) {
        this.gradeSuccess = grade;
    }

    public boolean isGraded() {
        return graded;
    }

    public void setGraded(boolean graded) {
        this.graded = graded;
    }

    public String getCommentToImprove() {
        return commentToImprove;
    }

    public void setCommentToImprove(String comment) {
        this.commentToImprove = comment;
    }

    public int getGradeCommunicate() {
        return gradeCommunicate;
    }

    public void setGradeCommunicate(int gradeCommunicate) {
        this.gradeCommunicate = gradeCommunicate;
    }

    public String getCommentCompliment() {
        return commentCompliment;
    }

    public void setCommentCompliment(String commentCompliment) {
        this.commentCompliment = commentCompliment;
    }
}
