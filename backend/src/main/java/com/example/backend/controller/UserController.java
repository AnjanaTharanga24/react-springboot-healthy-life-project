package com.example.backend.controller;

import com.example.backend.Exception.NotFoundException;
import com.example.backend.controller.request.UserLoginRequest;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@CrossOrigin("http://localhost:3000")
public class UserController {

    private UserService userService;

    @PostMapping("/users")
    public User registerUser(@RequestBody User user){
        return userService.register(user);
    }

    @PostMapping("/users/login")
    public User loginUser(@RequestBody UserLoginRequest userLoginRequest) throws NotFoundException {
        return userService.login(userLoginRequest);
    }
}
