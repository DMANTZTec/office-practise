package com.dmantz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dmantz.model.Options;

@Repository
public interface OptionsRepository extends JpaRepository<Options,Integer> {

}
