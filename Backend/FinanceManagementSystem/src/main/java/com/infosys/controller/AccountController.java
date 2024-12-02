package com.infosys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.infosys.entity.Account;
import com.infosys.entity.Register;
import com.infosys.repo.AccountRepo;
import com.infosys.repo.RegisterRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountRepo accountRepo;

    @Autowired
    private RegisterRepo registerRepo;

    @PostMapping("/add")
    public String addAccount(@RequestBody Account account) {
        int userId = account.getUser().getId();
        Register user = registerRepo.findById(userId).orElse(null);

        if (user == null) {
            return "User not found!";
        }

        account.setUser(user);
        accountRepo.save(account);
        return "Account added successfully!";
    }
}
