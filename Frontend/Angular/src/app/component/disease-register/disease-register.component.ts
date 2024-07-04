import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonEngine } from '@angular/ssr';
import { ApicallService } from '../../service/apicall.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-disease-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './disease-register.component.html',
  styleUrl: './disease-register.component.css',
  providers: [ApicallService]
})
export class DiseaseRegisterComponent {

  constructor(private ApicallService: ApicallService){}

  DiseaseRegisterForm = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    description: new FormControl(''),
    symptoms: new FormControl('')
  })

  onsubmit(){

    const disease = { "name": this.DiseaseRegisterForm.value.name,
                      "description": this.DiseaseRegisterForm.value.description,
                      "symptoms": this.DiseaseRegisterForm.value.symptoms,
                      "code": this.DiseaseRegisterForm.value.code  };

    this.ApicallService.CreateDisease(disease).subscribe();
    location.reload();
    window.alert('succusfully added');

  }

}
