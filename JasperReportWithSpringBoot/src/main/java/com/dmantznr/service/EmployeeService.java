package com.dmantznr.service;

import java.io.IOException;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dmantznr.dao.EmployeeDAOImpl;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperPrint;

@Service
public class EmployeeService {

 @Autowired
 private EmployeeDAOImpl employeeDaoImpl;
 
 public JasperPrint exportPdfFile() throws SQLException, JRException, IOException {
  return employeeDaoImpl.exportPdfFile();
 }
}
