package com.dmantz.dao;
import org.springframework.data.repository.CrudRepository;

import com.dmantz.model.SavingsAccount;

public interface SavingsAccountDao extends CrudRepository<SavingsAccount, Long> {

    SavingsAccount findByAccountNumber (int accountNumber);
}
