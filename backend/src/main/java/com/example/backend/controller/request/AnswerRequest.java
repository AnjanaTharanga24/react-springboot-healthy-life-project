package com.example.backend.controller.request;

import com.example.backend.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnswerRequest {
    private String goal;
    private Gender gender;
    private Integer age;
    private Float height;
    private Float weight;
    private String activityLevel;
    private Float goalWeight;
    private String gymStatus;
}
