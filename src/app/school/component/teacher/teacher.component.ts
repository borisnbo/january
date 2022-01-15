import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
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
  update:boolean =false;

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings = {};

  
  constructor(private tService: TeacherService,
    public router:Router,  
      public fb:FormBuilder) { 
    
        this.getTeachers();
    
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

  edit(row:any){
    this.update = true
    this.TForm.controls['name'].setValue(row.name)
    this.TForm.controls['surname'].setValue(row.surname)
    this.TForm.controls['sexe'].setValue(row.sexe)
    this.TForm.controls['dateOfBirth'].setValue(row.dateOfBirth)
    this.TForm.controls['grade'].setValue(row.grade)
  }

  getTeachers(){
    this.tService.getTeachers().subscribe(d=>{
      this.data=d; 
      this.completed = true;
    });
  }
  saveTeacher(){ 
    return this.tService.saveTeachers(this.TForm.value).subscribe(d=>{ 
      console.log(d);
      alert("Enregistré avec succès");
      this.getTeachers();          
      let ref = document.getElementById("close");
      ref?.click(); 
   });
 }
 deleteTeacher(row:number){ 
  this.tService.deleteTeachers(row).subscribe(d=>{       
  alert("Erreur lors de la suppression");
}, err=>{
  console.log(err);
  alert("Supprimé avec succès");
  this.getTeachers();
});
}

}
