package org.example.wink_challenge.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "person")
public class Person {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "username")
    @NotEmpty(message = "Имя не должно быть пустым")
    @Size(min = 2, max = 100, message = "Имя должно быть длиной от 2 до 100 символов")
    @NotNull
    private String username;

    @Column(name = "password")
    @NotNull
    @NotEmpty(message = "Не должен быть пустым")
    private String password;


    @Column(name="role")
    private String role;

    @OneToMany(mappedBy = "owner")
    private List<GoalEntity> goal = new ArrayList<GoalEntity>();

    @OneToMany(mappedBy = "sender")
    private List<GradeEntity> sendGrades = new ArrayList<>();

    @OneToMany(mappedBy = "receiver")
    private List<GradeEntity> receivedGrades = new ArrayList<>();


    public Person() {
    }

    public Person(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
