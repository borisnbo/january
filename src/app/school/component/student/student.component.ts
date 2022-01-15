import { Component, OnInit } from '@angular/core';
import { compo } from '../../models/models';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  header: Array<compo> = [
    {title:"title", value:"'title'"},
    {title:"value", value:"'value'"},
  ];
  content: Array<compo> = [
    {title:"demo content", value:"demo content"},
    {title:"test content", value:"test content"},
    {title:"try content", value:"try content"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
