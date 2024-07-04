import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../service/apicall.service';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-search.component.html',
  styleUrl: './patient-search.component.css',
  providers: [ApicallService],
})

export class PatientSearchComponent implements OnInit {

   constructor(private apiservice: ApicallService, private fb: FormBuilder, private location: Location, private router: Router){}

   patientserachform = this.fb.group({
      patientName : '',
      diseaseName : '',
      bloodGroup : ''
   })

   ngOnInit(): void {
       this.click();
   }

   patients: any[] = [];
 
  click(){
    this.apiservice.getinfo().subscribe((data: any[])=>{console.log(data); console.log(typeof data); this.patients=data;});
  }

  Blood_group = [{id: 'O+'},{id: 'O-'},{id: 'A+'},{id: 'A-'},{id: 'B+'},{id: 'B-'},{id: 'AB+'},{id: 'AB-'}];

  delete(number: number){
    this.apiservice.deleteUser(number).subscribe();
    console.log(number);
    location.reload();
    window.alert('Succesfully removed');
  }

  view(number: number){
    this.apiservice.setRedirectDetails(number);
    this.router.navigate(["/patient_details"]);
  }

}
