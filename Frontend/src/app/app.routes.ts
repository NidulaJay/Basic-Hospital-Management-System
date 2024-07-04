import { Routes } from '@angular/router';
import { PatientRegisterComponent } from './component/patient-register/patient-register.component';
import { DiseaseRegisterComponent } from './component/disease-register/disease-register.component';
import { PatientSearchComponent } from './component/patient-search/patient-search.component';
import { PatientDetailsComponent } from './component/patient-details/patient-details.component';


export const routes: Routes = [
    {
        path: 'patient-reg',
        component: PatientRegisterComponent
    }
    ,
    {
        path: 'disease-reg',
        component: DiseaseRegisterComponent
    }
    ,
    {
        path: 'patient-search',
        component: PatientSearchComponent
    }
    ,
    {
        path: 'patient_details',
        component: PatientDetailsComponent
    }
];
