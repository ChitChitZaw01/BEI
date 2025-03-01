import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-courses',
  imports: [CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  products = [
    {
      name: 'English Literature',
      description: 'Our English Literature course offers an immersive journey through the world of literature, guiding you through the complexities and beauty of texts from various genres and periods. Whether you’re new to the world of literature or looking to deepen your understanding, this course will help you explore the rich history and diverse voices of authors across time.',
      // price: '$25.99',
      image: 'images/eng.jpg'
    },
    {
      name: 'Japanese Literature',
      description: 'Our Japanese Literature course offers a deep dive into the rich history of Japanese storytelling, from ancient texts to contemporary works. Whether you are a literature enthusiast or new to Japanese culture, this course will give you the tools to understand and appreciate the beauty and depth of Japan’s literary heritage.',
      // price: '$79.99',
      image: 'images/jp.jpg'
    },
    {
      name: 'Computer Science',
      description: 'Our Computer Science course is designed to provide you with a solid foundation in the principles and practices of computer science. Whether you are starting from scratch or aiming to deepen your knowledge, this course will equip you with the skills necessary to understand, develop, and innovate in the world of technology.',
      // price: '$34.99',
      image: 'images/it2.jpg'
    }
    // {
    //   name: 'Thai Literature',
    //   description: 'Our Thai Language course offers a comprehensive introduction to one of Southeast Asia’s most fascinating languages. Whether you are planning to travel to Thailand, engage with Thai culture, or simply want to learn a new language, this course will provide you with the skills and confidence to speak, read, and understand Thai.',
    //   // price: '$19.99',
    //   image: 'images/it2.jpg'
    // }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}