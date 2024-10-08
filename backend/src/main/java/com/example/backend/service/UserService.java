package com.example.backend.service;

import com.example.backend.Exception.NotFoundException;
import com.example.backend.controller.request.UserLoginRequest;
import com.example.backend.model.User;

public interface UserService {

    User register(User user);
    User login(UserLoginRequest userLoginRequest) throws NotFoundException;
}
