package org.example.wink_challenge.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;

public class PersonDTO {
    @NotEmpty(message = "Имя не должно быть пустым")
    @Size(min = 2, max = 100, message = "Имя должно быть длиной от 2 до 100 символов")
    @NotNull
    private String username;

    @NotNull
    @NotEmpty(message = "Не должен быть пустым")
    private String password;

    @Override
    public String toString() {
        return "PersonDTO{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public PersonDTO() {
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
}
