package com.example.backend.controller.response;

import com.example.backend.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AnswerResponse {

    private Long id;
    private String goal;
    private Gender gender;
    private Integer age;
    private Float height;
    private Float weight;
    private String activityLevel;
    private Float goalWeight;
    private String gymStatus;
}
