import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './school/component/classe/classe.component';
import { CourseComponent } from './school/component/course/course.component';
import { InscriptionComponent } from './school/component/inscription/inscription.component';
import { LevelComponent } from './school/component/level/level.component';
import { SerieComponent } from './school/component/serie/serie.component';
import { StudentComponent } from './school/component/student/student.component';
import { TeacherComponent } from './school/component/teacher/teacher.component';


const routes: Routes = [
  { path: "home/home", component:TeacherComponent },
  { path: "home/serie", component:SerieComponent },
  { path: "home/classe", component:ClasseComponent },
  { path: "home/level", component:LevelComponent },
  { path: "home/teacher", component:TeacherComponent },
  { path: "home/student", component:StudentComponent },
  { path: "home/course", component:CourseComponent },
  { path: "home/inscription", component:InscriptionComponent },
  { path: "", redirectTo:"home/home", pathMatch:"full" },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
