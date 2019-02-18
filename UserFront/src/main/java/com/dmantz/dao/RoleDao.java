package com.dmantz.dao;

import javax.management.relation.Role;

import org.springframework.data.repository.CrudRepository;

public interface RoleDao extends CrudRepository<Role, Integer> {
    com.dmantz.security.Role findByName(String name);

	void save(com.dmantz.security.Role role);
}
