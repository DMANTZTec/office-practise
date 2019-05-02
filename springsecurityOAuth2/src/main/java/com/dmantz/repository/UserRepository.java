package com.dmantz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dmantz.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{
User findByUserName(String username);
}
