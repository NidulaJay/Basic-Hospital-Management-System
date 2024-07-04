package com.mobiteltest.hospital_managemant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiseaseTableService {

    @Autowired
    private DiseaseTableRepository DiseaseTableRepository;


    public List <DiseaseTable> getAllDisease(){
        return DiseaseTableRepository.findAll();
    }

    public DiseaseTable createDisease(DiseaseTable patientDiseaseTable){
        return DiseaseTableRepository.save(patientDiseaseTable);
    }

}
