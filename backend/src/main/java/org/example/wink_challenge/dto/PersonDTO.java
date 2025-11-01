package org.example.wink_challenge.dto;

public class PersonDTO {

    private String username;
    private int id;

    public PersonDTO() {
    }

    public PersonDTO(String username, int id) {
        this.username = username;
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
