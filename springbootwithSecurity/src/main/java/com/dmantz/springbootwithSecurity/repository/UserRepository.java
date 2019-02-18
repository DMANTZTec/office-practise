package com.dmantz.springbootwithSecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dmantz.springbootwithSecurity.model.*;
public interface UserRepository extends JpaRepository<User, Integer>{

}