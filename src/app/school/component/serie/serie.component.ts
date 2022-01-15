import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SerieService } from '../../services/SerieService';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  data:any =[];
  completed:boolean = false;
  TForm: FormGroup;
  update:boolean =false;
  series:any =  [];
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(private tService: SerieService,
    public router:Router,  
      public fb:FormBuilder) { 
        
    this.getSeries();
    this.TForm = this.fb.group({
      name: [''],
      slug: ['']
    })
  }

  ngOnInit(): void {
    
    this.series = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
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

  
  getSeries(){
    this.tService.getSeries().subscribe(d=>{
      this.data=d; 
      this.completed = true;
    });
  }

  edit(row:any){
    this.update = true
    this.TForm.controls['name'].setValue(row.name)
    this.TForm.controls['slug'].setValue(row.name)
  }

  saveSerie(){ 
    console.log(this.TForm.value.name);
    
    if (this.TForm.value.name !="" && this.TForm.value.slug !="") {
      this.tService.saveSeries(this.TForm.value).subscribe(d=>{ 
        console.log(d);
        alert("Enregistré avec succès");
        this.TForm.reset();
        this.getSeries();            
        let ref = document.getElementById("close");
        ref?.click();  
    });
    }
  }

  deleteSerie(row:number){ 
      this.tService.deleteSeries(row).subscribe(d=>{       
      alert("Erreur lors de la suppression");
    }, err=>{
      console.log(err);
      alert("Supprimé avec succès");
      this.getSeries();
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
