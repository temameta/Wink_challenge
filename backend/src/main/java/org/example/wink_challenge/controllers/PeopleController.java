package org.example.wink_challenge.controllers;

import org.example.wink_challenge.dto.PersonDTO;
import org.example.wink_challenge.entities.Person;
import org.example.wink_challenge.services.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/people")
public class PeopleController {

    private final PeopleService peopleService;

    @Autowired
    public PeopleController(PeopleService peopleService) {
        this.peopleService = peopleService;
    }


    @GetMapping("/get/all")
    public List<PersonDTO> getAllPeople() {
        List<PersonDTO> people = new ArrayList<>();

        for (Person person : peopleService.getAllPeople()) {
            people.add(peopleService.convertToDTO(person));
        }

        return people;
    }
}
