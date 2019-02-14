package com.dmantznr.repository;

import java.util.Date;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.dmantznr.model.User;
import com.dmantznr.security.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer>{
	
	PasswordResetToken findByUser(User user);
	static PasswordResetToken findByToken(final String token) {
		
		return null;
	}
	
Stream<PasswordResetToken> findAllByExpiryDateLessThan(Date now);

@Modifying
@Query("delete from PasswordResetToken t where t.expiryDate <= ?1")
void deleteAllExpiredSince(Date now);


}
