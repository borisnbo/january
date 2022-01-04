import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseService';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  data:any =[];
  
  constructor(private patientService: CourseService) { 
    console.log(this.data);
    
    this.patientService.getCourses().subscribe(d=>{
      this.data=d; 
      console.log(this.data);          
    });
  }


  ngOnInit(): void {
  }

}
