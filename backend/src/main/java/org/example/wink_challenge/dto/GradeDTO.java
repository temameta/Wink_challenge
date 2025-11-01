package org.example.wink_challenge.dto;

public class GradeDTO {

    private int id;

    private int sender;

    private int receiver;

    private int goal;

    private int grade;

    private boolean graded;

    private String comment;

    public GradeDTO() {
    }

    public GradeDTO(int id, int sender, int receiver, int goal, boolean graded) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.goal = goal;
        this.graded = graded;
    }

    public GradeDTO(int id, int sender, int receiver, int goal, int grade, boolean graded, String comment) {
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

    public int getSender() {
        return sender;
    }

    public void setSender(int sender) {
        this.sender = sender;
    }

    public int getReceiver() {
        return receiver;
    }

    public void setReceiver(int receiver) {
        this.receiver = receiver;
    }

    public int getGoal() {
        return goal;
    }

    public void setGoal(int goal) {
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
