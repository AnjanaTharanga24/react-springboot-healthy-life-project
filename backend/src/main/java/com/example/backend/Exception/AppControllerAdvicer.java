package com.example.backend.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppControllerAdvicer {

     @ExceptionHandler(NotFoundException.class)
     public ResponseEntity<String> handleNotFoundError(NotFoundException e){
          return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
     }
}
