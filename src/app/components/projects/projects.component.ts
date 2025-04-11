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
    { name: 'Portfolio Angular', description: 'Un site personnel en Angular', link: 'https://portfolio-pj8kbym80-alphonse-sorels-projects.vercel.app/' },
    { name: 'Applicattion de Liste de Pays', description: 'Un site qui affiche les pays du monde', link: 'https://tp-angular-api-tes-6xyjz7ey4-alphonse-sorels-projects.vercel.app/' }
  ];
}
