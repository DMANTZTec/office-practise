package com.dmantz.service;

import java.security.Principal;

import com.dmantz.model.PrimaryAccount;
import com.dmantz.model.SavingsAccount;

public interface AccountService {
	PrimaryAccount createPrimaryAccount();
    SavingsAccount createSavingsAccount();
    void deposit(String accountType, double amount, Principal principal);
    void withdraw(String accountType, double amount, Principal principal);
    
    
}
