package com.example.backend.service.impl;

import com.example.backend.Exception.NotFoundException;
import com.example.backend.controller.request.UserLoginRequest;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public User register(User user) {

        User newUser = new User();

        newUser.setName(user.getName());
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());

        return userRepository.save(newUser);
    }

    @Override
    public User login(UserLoginRequest userLoginRequest) throws NotFoundException {

        Optional<User> findUser = userRepository.findByEmailAndPassword(userLoginRequest.getEmail(),userLoginRequest.getPassword());

        if (!findUser.isPresent()){
            throw new NotFoundException("invalid credential!!");
        }

        User user = findUser.get();

        return user;


    }
}
