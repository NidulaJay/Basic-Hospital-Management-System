package com.mobiteltest.hospital_managemant;

import jakarta.persistence.*;

@Entity
@Table(name = "disease")
public class DiseaseTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long did;

    @Column(nullable = false)
    private String name;

    @Column()
    private String description;

    @Column()
    private String symptoms;

    @Column(nullable = false)
    private String code;


    public DiseaseTable(){}

    public DiseaseTable(String name_, String description_, String symptoms_, String code_ ){
        this.name = name_;
        this.description = description_;
        this.symptoms = symptoms_;
        this.code = code_;
    }

    public long getDid() {
        return did;
    }

    public void setDid(long did_) {
        this.did = did_;
    }

    public String getName() {
        return name;
    }

    public void setName(String name_) {
        this.name = name_;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description_) {
        this.description = description_;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms_) {
        this.symptoms = symptoms_;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code_) {
        this.code = code_;
    }

}
