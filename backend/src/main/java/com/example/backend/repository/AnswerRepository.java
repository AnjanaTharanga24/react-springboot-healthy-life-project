package com.example.backend.repository;

import com.example.backend.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer ,Long> {

    Answer getAnswerByUserId(Long userId);
}
