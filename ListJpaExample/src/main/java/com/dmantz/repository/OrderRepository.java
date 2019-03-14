package com.dmantz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dmantz.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer>{

}
