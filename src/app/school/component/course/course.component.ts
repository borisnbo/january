import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  data:any =[];
  completed:boolean = false;
  TForm: FormGroup;

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings = {};
  update:boolean =false;

  
  constructor(private tService: CourseService,
    public router:Router,  
      public fb:FormBuilder) { 
    this.getCourses();
    
    this.TForm = this.fb.group({
      name: [''],
      slug: ['']
    })
  }


  ngOnInit(): void {
        
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getCourses(){
    this.tService.getCourses().subscribe(d=>{
      this.data=d; 
      this.completed = true;
    });
  }

  edit(row:any){
    this.update = true
    this.TForm.controls['name'].setValue(row.name)
    this.TForm.controls['slug'].setValue(row.name)
  }

    saveCourse(){ 
      console.log(this.TForm.value.name);
      
      if (this.TForm.value.name !="" && this.TForm.value.slug !="") {
        this.tService.saveCourses(this.TForm.value).subscribe(d=>{ 
          console.log(d);
          alert("Enregistré avec succès");
          this.TForm.reset();
          this.getCourses();            
          let ref = document.getElementById("close");
          ref?.click();  
      });
      }
  }

  deleteCourse(row:number){ 
      this.tService.deleteCourses(row).subscribe(d=>{       
      alert("Erreur lors de la suppression");
    }, err=>{
      console.log(err);
      alert("Supprimé avec succès");
      this.getCourses();
    });
  }

  isUpdate(val:string){
    console.log(val);
    
    if(val=="yes")
      this.update = true
    else
      this.update = false
  }
}
