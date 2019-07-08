package com.dmantz.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dmantz.common.ChartReport;
import com.dmantz.repository.ChartRepository;

@Service("chartService")
@Transactional
public class ChartService {

	@Autowired
	private ChartRepository chartRepository;
	
	public  Iterable<ChartReport> findAll() {
	
		return chartRepository.findAll();
		
	}
	
	public List<Map<String,Object>> report() {
	List<Map<String,Object>> result= new ArrayList<Map<String,Object>>();
	for(ChartReport chartReport:this.findAll()) {
		Map<String,Object> item=new HashMap<String,Object>();
		item.put("id",chartReport.getId());
		item.put("name",chartReport.getName());
		item.put("english",chartReport.getEnglish());
		item.put("hindi",chartReport.getHindi());
		item.put("telugu",chartReport.getTelugu());
	result.add(item);
	}
	
	return result;
}
}
