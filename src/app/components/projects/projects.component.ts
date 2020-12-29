import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../services/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectList: Project[];

  constructor(private project: ProjectService) {}

  ngOnInit(): void {
    this.project
      .getProjects()
      .then((response) => {
        // Use below for DESC sort.
        // this.projectList = response['data'].sort((a, b) => a.ProjectID < b.ProjectID ? -1 : a.ProjectID > b.ProjectID ? 1 : 0);
        this.projectList = response['data'];
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
}
