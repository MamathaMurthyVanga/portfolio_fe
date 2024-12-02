import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectserviceService } from '../projectservice.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  ProjectDatas:any = [];


constructor(
  private projectservice:ProjectserviceService,
  
){}

ngOnInit(): void {
  this.ProjectData();
}

ProjectData():void{
  this.projectservice.ProjectData().subscribe(
    (data) =>{
      this.ProjectDatas = data;
    },
    (error) =>{
      console.error('Error fetching main categories:', error);
    
    }
    
  );

}
}