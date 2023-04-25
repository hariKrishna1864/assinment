import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { FormControl, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
 

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  
   
  patientList: any;
  selectedPatient: any = {
    firstName: '',
    lastName: '',
    phoneNumber:'',
    email:'',
    address: '',
    address2: '',
    city:'',
    state:'',
    zipcode:''

  };
  addUpdateLabel: string = 'Add';
  searchText!: '';
 

  

  
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {

 
    this.patientService.setPatientList();
    this.getPatientList();
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  

  getPatientList() {
    this.patientList = this.patientService.getPatientList();
  }

  editPatient(patient: any) {
    this.selectedPatient = patient;
    this.addUpdateLabel = 'Update';
  }

  deletePatient(ID: number) {
    this.patientService.deletePatient(ID);
    this.getPatientList();
  }

  addPatient(r:any){
    debugger;
    if(this.addUpdateLabel === 'Add'){
      this.patientService.patientsList.push(this.selectedPatient);
      this.patientService.setPatientList();
      this.getPatientList();
      this.selectedPatient = {
        firstName: '',
        lastName: '',
        phoneNumber:'',
        email:'',
        address: '',
        address2: '',
        city:'',
        state:'',
        zipcode:''
      };
      r.reset()
    }else{
      const index = this.patientList.findIndex((el: any) => el.patientID === this.selectedPatient.patientID);
      if(index > -1){
        this.patientList[index] = this.selectedPatient;
        this.patientService.patientsList = this.patientList;
        this.patientService.setPatientList();
        this.getPatientList();
      }
      this.addUpdateLabel = 'Add';
      r.reset();
    }
  }
  


 
  
}
 