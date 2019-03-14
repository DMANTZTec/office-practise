package com.dmantz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dmantz.model.UserLog;

@Repository
public interface UserLogRepository extends JpaRepository<UserLog,Integer> {

}
