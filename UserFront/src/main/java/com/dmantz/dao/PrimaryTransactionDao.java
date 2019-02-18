package com.dmantz.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dmantz.model.PrimaryTransaction;

public interface PrimaryTransactionDao extends CrudRepository<PrimaryTransaction, Long> {

    List<PrimaryTransaction> findAll();
}
