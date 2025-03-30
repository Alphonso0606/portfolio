import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { name: 'Portfolio Angular', description: 'Un site personnel en Angular', link: '#' },
    { name: 'Application de tâches', description: 'Un gestionnaire de tâches avec Firebase', link: '#' }
  ];
}
