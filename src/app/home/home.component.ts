import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesComponent } from '../courses/courses.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    CoursesComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}