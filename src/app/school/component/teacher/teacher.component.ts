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
  completed:boolean = false;
  TForm: FormGroup;
  
  constructor(private tService: TeacherService,
    public router:Router,  
      public fb:FormBuilder) { 
    
    this.tService.getTeachers().subscribe(d=>{
      this.data=d;  
      this.completed = true;       
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

  saveTeacher(){ 
    return this.tService.saveTeachers(this.TForm.value).subscribe(d=>{
     this.router.navigate(['home/teacher'])
   });
   
    // console.log("Bonjour le monde");
    
 }

}
