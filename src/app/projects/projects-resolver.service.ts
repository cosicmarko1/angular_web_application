import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Projects } from "./project.model";
import { ProjectsService } from "./projects.service";

@Injectable({ providedIn: 'root' })

export class ProjectsResolverService implements Resolve<Projects[]> {

    constructor(private dataStorageService: DataStorageService, private projectsService: ProjectsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const projects = this.projectsService.getProjects();
        if (projects.length === 0) {
            return this.dataStorageService.fetchProjects();
        } else {
            return projects;
        }
    }
}