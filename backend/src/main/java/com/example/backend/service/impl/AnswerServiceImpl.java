package com.example.backend.service.impl;

import com.example.backend.Exception.NotFoundException;
import com.example.backend.controller.request.AnswerRequest;
import com.example.backend.controller.response.AnswerResponse;
import com.example.backend.model.Answer;
import com.example.backend.model.User;
import com.example.backend.repository.AnswerRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.AnswerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AnswerServiceImpl implements AnswerService {

    private UserRepository userRepository;
    private AnswerRepository answerRepository;
    @Override
    public AnswerResponse createAnswers(Long userId , AnswerRequest answerRequest) throws NotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()->new NotFoundException("user not found with id " + userId));

        Answer answer = new Answer();
        answer.setGoal(answerRequest.getGoal());
        answer.setGender(answerRequest.getGender());
        answer.setAge(answerRequest.getAge());
        answer.setHeight(answerRequest.getHeight());
        answer.setWeight(answerRequest.getWeight());
        answer.setActivityLevel(answerRequest.getActivityLevel());
        answer.setGoalWeight(answerRequest.getGoalWeight());
        answer.setGymStatus(answerRequest.getGymStatus());
        answer.setUser(user);

        answerRepository.save(answer);

        return AnswerResponse.builder()
                .id(answer.getId())
                .goal(answer.getGoal())
                .gender(answer.getGender())
                .age(answer.getAge())
                .height(answer.getHeight())
                .weight(answer.getWeight())
                .activityLevel(answer.getActivityLevel())
                .goalWeight(answer.getGoalWeight())
                .gymStatus(answer.getGymStatus())
                .build();
    }
}
