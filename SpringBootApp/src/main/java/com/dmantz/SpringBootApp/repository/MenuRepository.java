package com.dmantz.SpringBootApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dmantz.SpringBootApp.model.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu,Integer> {

}
