package org.example.wink_challenge.controllers;

import org.example.wink_challenge.dto.GoalDTO;
import org.example.wink_challenge.dto.GradeDTO;
import org.example.wink_challenge.dto.GradeRequest;
import org.example.wink_challenge.dto.PersonDTO;
import org.example.wink_challenge.services.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpRequest;
import java.util.List;

@RestController
@RequestMapping("/grades")
public class GradesController {

    private final GradeService gradeService;

    @Autowired
    public GradesController(GradeService gradeService) {
        this.gradeService = gradeService;
    }


    @PostMapping("/create")
    public HttpStatus create(@RequestBody GradeRequest gradeRequest,
                              Authentication auth) {
        gradeService.createGrades(gradeRequest.getPeople(), gradeRequest.getGoalId(), auth.getName());

        return HttpStatus.OK;
    }
}
