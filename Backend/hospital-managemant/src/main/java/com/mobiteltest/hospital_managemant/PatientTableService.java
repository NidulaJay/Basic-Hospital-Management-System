package com.mobiteltest.hospital_managemant;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientTableService {

    @Autowired
    private PatientTableRepository patientTableRepository;

    public List<PatientTable> getAllUsers(){
        return patientTableRepository.findAll();
    }

    public PatientTable createUser(PatientTable patientTable){
        return patientTableRepository.save(patientTable);
    }

    public void deleteUser(Long id){
        patientTableRepository.deleteById(id);
    }

    public PatientTable getUserById(long id){
        return patientTableRepository.findById(id).orElse(null);
    }

    public PatientTable updateUser(long id, PatientTable userDetails){
        PatientTable user = patientTableRepository.findById(id).orElseThrow();
        user.setPid(userDetails.getPid());
        user.setFName(userDetails.getFName());
        user.setLname(userDetails.getLname());
        user.setEmail(userDetails.getEmail());
        user.setBirthDate(userDetails.getBirthDate());
        user.setCity(userDetails.getCity());
        user.setAddress(userDetails.getAddress());
        user.setPhone_number(userDetails.getPhone_number());
        user.setBloodGroup(userDetails.getBloodGroup());
        return patientTableRepository.save(user);

    }

}
