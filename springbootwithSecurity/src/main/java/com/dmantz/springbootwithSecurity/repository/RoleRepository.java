package com.dmantz.springbootwithSecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dmantz.springbootwithSecurity.model.Role;

public interface RoleRepository extends JpaRepository<Role,Integer> {

}
