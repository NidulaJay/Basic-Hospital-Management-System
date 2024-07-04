package com.mobiteltest.hospital_managemant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "patientdisease")

public class PatientDiseaseTable {

    @Id
    @GeneratedValue
    private long id;

    

}
