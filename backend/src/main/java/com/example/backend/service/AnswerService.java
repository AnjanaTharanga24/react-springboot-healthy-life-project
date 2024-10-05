package com.example.backend.service;

import com.example.backend.Exception.NotFoundException;
import com.example.backend.controller.request.AnswerRequest;
import com.example.backend.controller.response.AnswerResponse;

public interface AnswerService {

    AnswerResponse createAnswers(Long userId , AnswerRequest answerRequest) throws NotFoundException;
}
