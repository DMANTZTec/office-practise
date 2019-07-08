package com.dmantz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dmantz.common.ChartReport;

public interface ChartRepository extends JpaRepository<ChartReport,Integer>{
ChartReport findById(int id);
}
