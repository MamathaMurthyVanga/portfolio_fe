import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MyskillsComponent } from './myskills/myskills.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'myskills',component:MyskillsComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
];



// navigation

// after generating new component include in this routes
