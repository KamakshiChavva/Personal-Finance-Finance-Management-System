package com.infosys.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.infosys.entity.Account;

@Repository
public interface AccountRepo extends JpaRepository<Account, Integer> {
}
