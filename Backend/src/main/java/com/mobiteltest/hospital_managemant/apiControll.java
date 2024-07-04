package com.mobiteltest.hospital_managemant;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class apiControll {

    @Autowired
    private PatientTableService patientTableService;

    @Autowired
    private DiseaseTableService DiseaseTableService;

    @GetMapping("/welcome")
    public int getint(){
        return 1;
    }

    @PostMapping("/createPatient")
    public PatientTable createUser(@RequestBody PatientTable patientTable){
        return patientTableService.createUser(patientTable);
    }

    @GetMapping("/getAllUsers")
    public List<PatientTable> getAllUsers(){
        return patientTableService.getAllUsers();
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id){
        patientTableService.deleteUser(id);
    }

    @GetMapping("/age/{age}")
    public Date getdate(Date birthDate){
         return birthDate;
    }

    @GetMapping("/getuser/{id}")
    public PatientTable getUserById(@PathVariable long id){
        return patientTableService.getUserById(id);
    }

    @PutMapping("/updateuser/{id}")
    public PatientTable updateuser(@PathVariable long id, @RequestBody PatientTable patientTable){
        return patientTableService.updateUser(id, patientTable);
    }

    /****************** Disease Table *****************************/

    @PostMapping("/createDisease")
    public DiseaseTable createdisease(@RequestBody DiseaseTable DiseaseTable){
        return DiseaseTableService.createDisease(DiseaseTable);
    }

    @GetMapping("/getDisease")
    public List<DiseaseTable> getDisease(){
        return DiseaseTableService.getAllDisease();
    }

}
