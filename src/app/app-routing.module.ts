import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './school/component/course/course.component';
import { StudentComponent } from './school/component/student/student.component';
import { TeacherComponent } from './school/component/teacher/teacher.component';


const routes: Routes = [
  { path: "home/home", component:TeacherComponent },
  { path: "home/teacher", component:TeacherComponent },
  { path: "home/student", component:StudentComponent },
  { path: "home/course", component:CourseComponent },
  { path: "", redirectTo:"home/home", pathMatch:"full" },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
