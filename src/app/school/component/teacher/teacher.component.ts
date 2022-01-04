import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../../services/TeacherService';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  data:any =[];
  TForm: FormGroup;
  
  constructor(private tService: TeacherService,
    public router:Router,  
      public fb:FormBuilder) { 
    
    this.tService.getTeachers().subscribe(d=>{
      this.data=d;         
    });
    this.TForm = this.fb.group({
      surname: [''],
      name: [''],
      sexe: [''],
      dateOfBirth: [''],
      grade: ['']
    })
  }
  ngOnInit(): void {
  }

  saveAbn(){ 
     console.log(this.TForm.value);
 }

}
