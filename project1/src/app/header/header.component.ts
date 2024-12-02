import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

constructor(private router:Router){}
  projects(){
    this.router.navigate(['projects'])
  }

  home(){
    this.router.navigate(['home'])
  }

  myskills(){
    this.router.navigate(['myskills'])
  }

}
