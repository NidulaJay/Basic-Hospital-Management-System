import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../service/apicall.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { stat } from 'fs';


@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css',
  providers: [ApicallService]
})
export class PatientDetailsComponent implements OnInit {

  constructor(private apicall: ApicallService, private router: Router){
    this.PatientRegisterForm.disable()
  }

  patients:any;
  Disease: any[] = [];

  PatientRegisterForm = new FormGroup({
    firstName: new FormControl(''),
    Last_Name: new FormControl(''),
    Email: new FormControl(''),
    Birth_Date: new FormControl(''),
    phone_number: new FormControl(''),
    ID_number: new FormControl(''),
    Address: new FormControl(''),
    City: new FormControl(''),
    Blood_Group: new FormControl('')
  })

  

  Blood_group = [{id: 'O+'},{id: 'O-'},{id: 'A+'},{id: 'A-'},{id: 'B+'},{id: 'B-'},{id: 'AB+'},{id: 'AB-'}];

  ngOnInit(): void {
      this.load();
  }

  load(){
    this.apicall.getUserByID(this.apicall.getRedirectDetails()).subscribe((data)=>{console.log(data); console.log(typeof data); this.patients=data; console.log(this.patients); console.log(typeof this.patients); this.populateForm();});
    this.apicall.getDisease().subscribe((data: any[])=>{console.log(data); console.log(typeof data); this.Disease=data;});
  }

  onSubmit(){
    console.log( this.PatientRegisterForm?.value);
    const patient = {"fname": this.PatientRegisterForm.value.firstName, 'lname': this.PatientRegisterForm.value.Last_Name, 'pid': parseInt(this.PatientRegisterForm.value.ID_number??""), 
                      'birthDate': this.PatientRegisterForm.value.Birth_Date, 'address': this.PatientRegisterForm.value.Address, 'bloodGroup': this.PatientRegisterForm.value.Blood_Group,
                      'email': this.PatientRegisterForm.value.Email, 'city': this.PatientRegisterForm.value.City, 'phone_number': this.PatientRegisterForm.value.phone_number};
    this.apicall.UpdatePatient(patient, this.apicall.getRedirectDetails()).subscribe();
    console.log(typeof this.PatientRegisterForm.value.Birth_Date);
    this.edit("cancel");
    console.log("this runs");
    //location.reload();
    //window.alert('succusfully Updated');
  }

  populateForm(){
    if(this.patients){
      this.PatientRegisterForm.patchValue({
        firstName: this.patients.fname,
        Last_Name: this.patients.lname,
        Email: this.patients.email,
        Birth_Date: this.patients.birthDate,
        phone_number: this.patients.phone_number,
        ID_number: this.patients.pid,
        Address: this.patients.address,
        City: this.patients.city,
        Blood_Group: this.patients.bloodGroup
      })
    }
  }


  delete(number: number){
    this.apicall.deleteUser(number).subscribe();
    console.log(number);
    window.alert('Succesfully removed');
    this.router.navigate(["/patient-search"]);
  }

  buttonStatus : boolean = true;
  deletebuttonStatus : boolean = false;
  functionStatus : string = "edit";
  buttonName: string = "Edit";
  
  back(){
    this.router.navigate(["/patient-search"]);
  }

  edit(status: String){

    if(status == "edit"){
      this.PatientRegisterForm.enable();
      this.buttonStatus = false;  
      this.deletebuttonStatus = true;  
      this.buttonName = "Cancel";
      this.functionStatus = "cancel";
    }

    else if(status == "cancel"){
      this.PatientRegisterForm.disable();
      this.buttonStatus = true;  
      this.deletebuttonStatus = false;  
      this.buttonName = "edit";
      this.functionStatus = "edit";
    }
    
    
  }

}
