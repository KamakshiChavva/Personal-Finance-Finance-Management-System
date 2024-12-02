package com.infosys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.infosys.entity.Register;
import com.infosys.service.RegisterServiceImp;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {

    @Autowired
    private RegisterServiceImp service;

    @PostMapping("/save")
    public String addNewUser(@RequestBody Register register) {
        Register addUser = service.registerNewUser(register);
        return addUser != null ? "New User has been successfully registered." : "Registration failed.";
    }

    @PostMapping("/log")
    public String login(@RequestParam String username, @RequestParam String password) {
        Register loginObj = service.loginUser(username, password);
        return loginObj != null ? "You have logged in successfully." : "Please enter a valid username and password.";
    }
}
