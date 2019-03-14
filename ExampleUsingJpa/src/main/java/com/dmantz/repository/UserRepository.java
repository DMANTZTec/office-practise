package com.dmantz.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dmantz.model.Users;

@Repository

public interface UserRepository  extends JpaRepository<Users,Integer>  {

	List<Users> findAll();
	

}
