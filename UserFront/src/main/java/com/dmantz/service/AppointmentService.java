package com.dmantz.service;

import java.util.List;
import java.util.Optional;

import com.dmantz.model.Appointment;

public interface AppointmentService {
	Appointment createAppointment(Appointment appointment);

    List<Appointment> findAll();

    Optional<Appointment> findAppointment(Long id);

    void confirmAppointment(Long id);
}
