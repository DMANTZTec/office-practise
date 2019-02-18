package com.dmantz.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dmantz.model.Appointment;

public interface AppointmentDao extends CrudRepository<Appointment, Long> {

    List<Appointment> findAll();
}
