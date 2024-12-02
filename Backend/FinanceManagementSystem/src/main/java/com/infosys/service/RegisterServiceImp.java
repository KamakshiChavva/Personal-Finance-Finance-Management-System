package com.infosys.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.infosys.entity.Register;
import com.infosys.repo.RegisterRepo;

@Service
public class RegisterServiceImp implements RegisterService {

    @Autowired
    private RegisterRepo repo;

    @Override
    public Register registerNewUser(Register register) {
        return repo.save(register);
    }

    @Override
    public Register loginUser(String username, String password) {
        Register user = repo.findByUsernameAndPassword(username, password);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
