// import { Component, OnInit } from '@angular/core';
// import { PortfolioService } from '../../services/portfolio.service';

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.css'
// })
// export class ProjectsComponent implements OnInit{
//   projects: any[] = [];

//   constructor(private portfolioService: PortfolioService) {}

//   ngOnInit(): void {
//     this.portfolioService.getProjects().subscribe((data:any) => {
//       this.projects = data;
//     });
//   }

// }



import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project Title',
      description: 'Project Description',
      technologies: 'Tech Stack',
      linkedinlink: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'mailto:email@example.com',
      image: 'path/to/image.jpg'
    },
    // Add more project objects as needed
  ];
}
