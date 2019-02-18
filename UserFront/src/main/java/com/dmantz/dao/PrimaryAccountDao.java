package com.dmantz.dao;


import org.springframework.data.repository.CrudRepository;

import com.dmantz.model.PrimaryAccount;


public interface PrimaryAccountDao extends CrudRepository<PrimaryAccount,Long> {

    PrimaryAccount findByAccountNumber (int accountNumber);
}
