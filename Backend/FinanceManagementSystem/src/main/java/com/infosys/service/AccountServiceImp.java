package com.infosys.service;

import com.infosys.entity.Account;
import com.infosys.entity.Register;
import com.infosys.repo.AccountRepo;
import com.infosys.repo.RegisterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImp implements AccountService {

    @Autowired
    private AccountRepo accountRepo;

    @Autowired
    private RegisterRepo registerRepo;

    @Override
    public Account addAccount(Account account, int userId) {
        Register user = registerRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.addAccount(account);
        return accountRepo.save(account);
    }
}
