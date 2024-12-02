package com.infosys.service;

import com.infosys.entity.Account;

public interface AccountService {
    Account addAccount(Account account, int userId);
}
