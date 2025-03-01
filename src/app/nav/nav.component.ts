// import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material/sidenav';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
// export class NavComponent implements OnInit  {
//   @ViewChild('sidenav', { static: false }) sidenav: MatSidenav | undefined;
//   constructor(private router: Router,
//     private breakpointObserver: BreakpointObserver
//   ) { }
//   isMobile: boolean = false;

//   // constructor(private breakpointObserver: BreakpointObserver) {}

//   ngOnInit() {
//     this.breakpointObserver
//       .observe([Breakpoints.Handset])
//       .subscribe((result) => {
//         this.isMobile = result.matches;
//       });
//   }

  export class NavComponent {
    @ViewChild('sidenav', { static: false }) sidenav: MatSidenav | undefined;
    constructor(private router: Router
        ) { }
  goToHome() {
    // Trigger any logic before navigating
    console.log('Navigating to Home page...');
    this.router.navigate(['/']);  // Programmatically navigate
  }
  goToAbout() {
    // Trigger any logic before navigating
    console.log('Navigating to About Us page...');
    this.router.navigate(['/about']);  // Programmatically navigate
  }

  goToCourses() {
    // Trigger any logic before navigating
    console.log('Navigating to courses page...');
    this.router.navigate(['/courses']);  // Programmatically navigate
  }

  goToCotact() {
    // Trigger any logic before navigating
    console.log('Navigating to contact page...');
    this.router.navigate(['/contact']);  // Programmatically navigate
  }

  title = 'responsive-hamburger-menu';

  // Toggle sidebar using ViewChild reference
  toggleSidebar() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
