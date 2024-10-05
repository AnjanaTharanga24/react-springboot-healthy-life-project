package com.example.backend.controller;

import com.example.backend.Exception.NotFoundException;
import com.example.backend.controller.request.AnswerRequest;
import com.example.backend.controller.response.AnswerResponse;
import com.example.backend.service.AnswerService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AnswerController {

    private AnswerService answerService;

    @PostMapping("/users/{user-id}/answers")
    public AnswerResponse createAnswers(@PathVariable("user-id") Long userId , @RequestBody AnswerRequest answerRequest) throws NotFoundException {
        return answerService.createAnswers(userId, answerRequest);
    }
}
