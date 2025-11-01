package org.example.wink_challenge.services;

import org.example.wink_challenge.dto.PersonDTO;
import org.example.wink_challenge.entities.Person;
import org.example.wink_challenge.repositories.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class PeopleService {

    private final PeopleRepository peopleRepository;

    @Autowired
    public PeopleService(PeopleRepository peopleRepository) {
        this.peopleRepository = peopleRepository;
    }

    public Optional<Person> findUserByUsername(String username) {
        return peopleRepository.findByUsername(username);
    }

    public List<Person> getAllPeople() {
        return peopleRepository.findAll();
    }

//    public Person convertToPerson(PersonDTO personDTO) {
//        Person person = new Person();
//        person.setUsername(personDTO.getUsername());
//
//    }

    public PersonDTO convertToDTO(Person person) {
        return new PersonDTO(person.getUsername(), person.getId());
    }
}

