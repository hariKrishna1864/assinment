import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  URL: string = "https://api.instantwebtools.net/v2/passenger?page=0&size=10";
  patientsList: any = [
    {
      patientID: 1,
      firstName: 'llllll',
      lastName: 'lorem last',
      phoneNumber:'9398222222',
      email:'example@gmail.com',
      address: 'lorem lorem lorem',
      address2: 'lorem lorem lorem lo',
      city:'mumbai',
      state:'maharashtra',
      zipcode:'222222'

    },
    {
      patientID: 2,
      firstName: 'yyyyy',
      lastName: 'lorem last',
      phoneNumber:'9398222222',
      email:'example@gmail.com',
      address: 'lorem lorem lorem',
      address2: 'lorem lorem lorem lo',
      city:'mumbai',
      state:'maharashtra',
      zipcode:'222222',
    }
  ];
  constructor(private httpclient: HttpClient) { }


  setPatientList(){
    localStorage.setItem('patientData', JSON.stringify(this.patientsList))
  }

  getPatientList(){
    // return this.httpclient.get(this.URL);
    return JSON.parse(localStorage.getItem('patientData') || '[]');
  }

  deletePatient(patientID: number){
    const index = this.patientsList.findIndex((el: any) => el.patientID === patientID);
    this.patientsList.splice(index, 1);
    this.setPatientList();
  }
}
