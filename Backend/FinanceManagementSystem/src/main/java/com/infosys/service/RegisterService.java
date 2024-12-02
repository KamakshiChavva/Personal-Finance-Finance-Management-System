package com.infosys.service;

import com.infosys.entity.Register;

public interface RegisterService {

    Register registerNewUser(Register register);

    Register loginUser(String username, String password);
}
