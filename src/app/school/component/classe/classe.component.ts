import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../../services/ClasseService';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  data:any =[];
  completed:boolean = false;
  update:boolean =false;
  TForm: FormGroup;
  levels: any;
  series: any;


  constructor(public tService: ClasseService, public fb:FormBuilder) { 
    this.getClasse(); this.getlevels();
    this.TForm = this.fb.group({
      name: [''],
      level: '',
      serie: ''
    })
    
  }

  ngOnInit(): void {
  }

  
  getClasse(){
    this.tService.getClasses().subscribe(d=>{
      this.data=d; 
      this.completed = true;
    });
  }    
  selected(item:any){
    console.log(item);
    
  }  

  getlevels(){
    this.tService.getLeves().subscribe(d=>{
      this.levels=d; 
    });    
    this.tService.getSeries().subscribe(d=>{
      this.series=d; 
    });
  }
    
  saveClasse(){ 
    this.TForm.value.level = {id:this.TForm.value.level}
    this.TForm.value.serie = {id:this.TForm.value.serie}
    // console.log(this.TForm.value);

    if (this.TForm.value.name !="" && this.TForm.value.level.id !="") {
      this.tService.saveClasses(this.TForm.value).subscribe(d=>{ 
        console.log(d);
        alert("Enregistré avec succès");
        this.TForm.reset();
        this.getClasse();            
        let ref = document.getElementById("close");
        ref?.click();  
    });
    }
  }

  edit(row:any){
    console.log(row);
    
    this.update = true
    this.TForm.controls['name'].setValue(row.name)
    this.TForm.controls['level'].setValue(row.level.name)
  }

  deleteClasse(row:number){ 
    this.tService.deleteClasses(row).subscribe(d=>{       
    alert("Erreur lors de la suppression");
    }, err=>{
      console.log(err);
      alert("Supprimé avec succès");
      this.getClasse();
    });
  }

}

