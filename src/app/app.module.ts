import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClasseComponent } from './school/component/classe/classe.component';
import { CourseComponent } from './school/component/course/course.component';
import { StudentComponent } from './school/component/student/student.component';
import { TeacherComponent } from './school/component/teacher/teacher.component';
import { LevelComponent } from './school/component/level/level.component';
import { HeaderComponent } from './school/common/header/header.component';
import { FooterComponent } from './school/common/footer/footer.component';
import { SidebarComponent } from './school/common/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasseComponent,
    CourseComponent,
    StudentComponent,
    TeacherComponent,
    LevelComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
