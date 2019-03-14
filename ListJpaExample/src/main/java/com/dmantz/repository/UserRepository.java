package com.dmantz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dmantz.model.Order;
import com.dmantz.model.User;

public interface UserRepository extends JpaRepository<User,Integer> {

}
