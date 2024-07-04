package com.mobiteltest.hospital_managemant;

import jakarta.persistence.*;


@Entity
@Table(name = "patient")

public class PatientTable {

    @Id
    private Long pid;

    @Column(nullable = false)
    private String fname;

    @Column(nullable = false)
    private String lname;

    @Column(nullable = false)
    private String Email;

    @Column(nullable = false)
    private String birth_date;

    @Column(nullable = false)
    private String phone_number;

    @Column(nullable = false)
    private String Address;

    @Column(nullable = false)
    private String City;

    @Column(nullable = false)
    private String blood_group;

    
    public PatientTable(){

    }

    public PatientTable(String Fname_, String Lname_){
        this.fname = Fname_;
        this.lname = Lname_;
    }

    public Long getPid() {
        return pid;
    }

    public void setPid(Long pid_) {
        this.pid = pid_;
    }

    public String getFName(){
        return fname;
    }

    public void setFName(String name_){
        this.fname = name_;
    }

    public String getLname(){
        return  lname;
    }

    public void setLname(String Lname_){
        this.lname = Lname_;
    }

    public String getEmail(){
        return  Email;
    }

    public void setEmail(String Email_){
        this.Email = Email_;
    }

    public String getBirthDate(){
        return  birth_date;
    }

    public void setBirthDate(String BirthDate_){
        this.birth_date = BirthDate_;
    }

    public String getPhone_number(){
        return  phone_number;
    }

    public void setPhone_number(String phone_number_){
        this.phone_number = phone_number_;
    }

    public String getAddress(){
        return Address;
    }

    public void setAddress(String Address_){
        this.Address = Address_;
    }

    public String getCity(){
        return City;
    }

    public void setCity(String City_){
        this.City = City_;
    }

    public String getBloodGroup(){
        return blood_group;
    }

    public void setBloodGroup(String BloodGroup_){
        this.blood_group = BloodGroup_;
    }

}
