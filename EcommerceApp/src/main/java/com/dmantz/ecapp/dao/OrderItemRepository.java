package com.dmantz.ecapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dmantz.ecapp.common.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem,Integer>{

}
