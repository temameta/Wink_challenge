package org.example.wink_challenge.controllers;

import jakarta.validation.Valid;
import org.example.wink_challenge.dto.RegisterRequest;
import org.example.wink_challenge.dto.RegisterResponse;
import org.example.wink_challenge.entities.Person;
import org.example.wink_challenge.services.RegistrationService;
import org.example.wink_challenge.util.PersonValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final RegistrationService registrationService;
    private final PersonValidator personValidator;

    @Autowired
    public AuthController(RegistrationService registrationService, PersonValidator personValidator) {
        this.registrationService = registrationService;
        this.personValidator = personValidator;
    }


    @PostMapping(value="/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> performRegistration(@RequestBody RegisterRequest registerRequest) {
//        personValidator.validate(person, bindingResult);
//
//        if (bindingResult.hasErrors())
//            return "/auth/registration";
//
//        registrationService.register(person);

        RegisterResponse response = registrationService.register(registerRequest);

        if (response.isSuccess()) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/hello")
    public String helloPage() {
        return "/auth/hello";
    }

    @GetMapping("/check")
    public ResponseEntity<?> checkPerson() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    public Person convertToPerson(PersonDTO personDTO) {
//        return modelMapper.map(personDTO, Person.class);
//    }
}
