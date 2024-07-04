import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  

  getinfo(): Observable<any>{
    return this.http.get("http://localhost:8080/api/users/getAllUsers");
    //response.subscribe((data)=>{console.log(data); this.patient=data;});
  }

  CreatePatient(patient: any): Observable<any>{
    const headers =  new HttpHeaders({'Content-Type':'application/json' });
    console.log("runnn" + JSON.stringify(patient));
    return this.http.post("http://localhost:8080/api/users/createPatient",patient, {headers});
  }

  deleteUser(id: number){
    return this.http.delete("http://localhost:8080/api/users/delete/"+id);
  }

    private static idnum: number = 0;

  setRedirectDetails(number: number){
    ApicallService.idnum = number;
  } 

  getRedirectDetails():number{
    return ApicallService.idnum;
  }

  getUserByID(id: number): Observable<any>{
    console.log(id + typeof id);
    return this.http.get("http://localhost:8080/api/users/getuser/" + id);
  }
  
  UpdatePatient(patient: any, id: number): Observable<any>{
    console.log("helooooo" + id);
    const headers =  new HttpHeaders({'Content-Type':'application/json' });
    console.log("runnn" + JSON.stringify(patient));
    return this.http.put("http://localhost:8080/api/users/updateuser/"+ id ,patient, {headers});
  }

  CreateDisease(patient: any): Observable<any>{
    const headers =  new HttpHeaders({'Content-Type':'application/json' });
    console.log("runnn" + JSON.stringify(patient));
    return this.http.post("http://localhost:8080/api/users/createDisease",patient, {headers});
  }

  getDisease(): Observable<any> {
    return this.http.get("http://localhost:8080/api/users/getDisease");
  }

}
