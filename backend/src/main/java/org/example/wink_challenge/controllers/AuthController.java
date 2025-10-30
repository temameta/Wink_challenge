package org.example.wink_challenge.controllers;

import jakarta.validation.Valid;
import org.example.wink_challenge.entities.Person;
import org.example.wink_challenge.services.RegistrationService;
import org.example.wink_challenge.util.PersonValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/auth")
public class AuthController {

    private final RegistrationService registrationService;
    private final PersonValidator personValidator;

    @Autowired
    public AuthController(RegistrationService registrationService, PersonValidator personValidator) {
        this.registrationService = registrationService;
        this.personValidator = personValidator;
    }

    @GetMapping("/login")
    public String loginPage() {
        return "auth/login";
    }

    @GetMapping("/registration")
    public String registrationPage(@ModelAttribute("person") Person person) {
        return "auth/registration";
    }

    @PostMapping("/registration")
    public String performRegistration(@ModelAttribute("person") @Valid Person person,
                                      BindingResult bindingResult) {
        personValidator.validate(person, bindingResult);

        if (bindingResult.hasErrors())
            return "/auth/registration";

        registrationService.register(person);

        return "redirect:/auth/login";
    }

    @GetMapping("/hello")
    public String helloPage() {
        return "/auth/hello";
    }

//    public Person convertToPerson(PersonDTO personDTO) {
//        return modelMapper.map(personDTO, Person.class);
//    }
}
