package org.example.wink_challenge.services;

import org.example.wink_challenge.repositories.GradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradeService {

    private final GradesRepository gradesRepository;

    @Autowired
    public GradeService(GradesRepository gradesRepository) {
        this.gradesRepository = gradesRepository;
    }
}
