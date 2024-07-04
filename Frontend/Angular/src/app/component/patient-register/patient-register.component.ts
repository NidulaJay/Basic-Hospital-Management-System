import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApicallService } from '../../service/apicall.service';

@Component({
  selector: 'app-patient-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-register.component.html',
  styleUrl: './patient-register.component.css',
  providers: [ApicallService]
})

export class PatientRegisterComponent {

  constructor(private apiservice: ApicallService){}

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



  onSubmit(): void{
    console.log( this.PatientRegisterForm?.value);
    const patient = {"fname": this.PatientRegisterForm.value.firstName, 'lname': this.PatientRegisterForm.value.Last_Name, 'pid': parseInt(this.PatientRegisterForm.value.ID_number??""), 
                      'birthDate': this.PatientRegisterForm.value.Birth_Date, 'address': this.PatientRegisterForm.value.Address, 'bloodGroup': this.PatientRegisterForm.value.Blood_Group,
                      'email': this.PatientRegisterForm.value.Email, 'city': this.PatientRegisterForm.value.City, 'phone_number': this.PatientRegisterForm.value.phone_number};
    this.apiservice.CreatePatient(patient).subscribe();
    console.log(typeof this.PatientRegisterForm.value.Birth_Date)
    location.reload();
    window.alert('succusfully added');
  }

}
 