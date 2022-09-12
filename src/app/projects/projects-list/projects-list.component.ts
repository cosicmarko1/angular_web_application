import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Projects } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Projects[];
  subscription: Subscription;
  searchText = '';

  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.projectsService.projectsChanged.subscribe(
      (projects: Projects[]) => {
        this.projects = projects;
      }
    );
    this.projects = this.projectsService.getProjects();
  }

  onSaveProjects() {
    this.dataStorageService.storeProjects();
  }

  onFetchProjects() {
    this.dataStorageService.fetchProjects().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
