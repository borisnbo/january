import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LevelService } from '../../services/LevelService';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  data:any =[];
  completed:boolean = false;
  TForm: FormGroup;
  update:boolean =false;

  series:any =  [];
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(private tService: LevelService,
    public router:Router,  
      public fb:FormBuilder) { 
        
    this.getLevels();
    this.TForm = this.fb.group({
      name: [''],
      slug: [''],
      amount: ['']      
    })
  }

  ngOnInit(): void {
        
    this.dropdownSettings= {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

  }

  
  getLevels(){
    this.tService.getLevels().subscribe(d=>{
      this.data=d; 
      this.completed = true;
    });
  }

  edit(row:any){
    this.update = true
    this.TForm.controls['name'].setValue(row.name)
    this.TForm.controls['slug'].setValue(row.name)
    this.TForm.controls['amount'].setValue(row.amount)
  }

  saveLevel(){ 
    console.log(this.TForm.value.series);
    
    if (this.TForm.value.name !="" && this.TForm.value.slug !="") {
      this.tService.saveLevels(this.TForm.value).subscribe(d=>{ 
        console.log(d);
        alert("Enregistré avec succès");
        this.TForm.reset();
        this.getLevels();            
        let ref = document.getElementById("close");
        ref?.click();  
    });
    }
  }

  deleteLevel(row:number){ 
      this.tService.deleteLevels(row).subscribe(d=>{       
      alert("Erreur lors de la suppression");
    }, err=>{
      console.log(err);
      alert("Supprimé avec succès");
      this.getLevels();
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
