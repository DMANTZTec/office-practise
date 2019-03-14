package com.dmantz.ecapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dmantz.ecapp.request.CreateOrderRequestPO;

public interface OrderRepository extends JpaRepository<CreateOrderRequestPO,Integer> {

}
