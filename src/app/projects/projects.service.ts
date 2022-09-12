import { Projects } from "../shared/project.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()

export class ProjectsService {

    projectsChanged = new Subject<Projects[]>();
    startedEditing = new Subject<number>();

    private projects: Projects[] = [
        new Projects('Projekt Bakačeva', 'Urbana vila', ''),
        new Projects('Projekt Muravićeva', 'Urbana vila', ''),
        new Projects('Projekt Gundulićeva', 'Stambeno poslovna zgrada', ''),
        new Projects('Projekt Teslina', 'Stambena zgrada', ''),
        new Projects('Projekt Strossmayerova', 'Stambena zgrada', '')
    ];

    // private projects: Projects[] = [];

    setProjects(projects: Projects[]) {
        this.projects = projects;
        this.projectsChanged.next(this.projects.slice());
    }

    getProjects() {
        return this.projects.slice();
    }

    getProject(index: number) {
        return this.projects[index];
    }

    addProject(project: Projects) {
        this.projects.push(project);
        this.projectsChanged.next(this.projects.slice());
    }

    addProjects(projects: Projects[]) {
        this.projects.push(...projects);
        this.projectsChanged.next(this.projects.slice());
    }

    updateProject(index: number, newProject: Projects) {
        this.projects[index] = newProject;
        this.projectsChanged.next(this.projects.slice());
    }

    deleteProject(index: number) {
        this.projects.splice(index, 1);
        this.projectsChanged.next(this.projects.slice());
    }

}