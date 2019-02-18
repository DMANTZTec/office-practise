package com.dmantz.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dmantz.model.SavingsTransaction;

public interface SavingsTransactionDao extends CrudRepository<SavingsTransaction, Long> {

    List<SavingsTransaction> findAll();
}

