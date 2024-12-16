import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProject(id).subscribe(project => {
        this.project = project;
      });
    }
  }
}
