import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Projects } from 'src/app/shared/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.css']
})
export class ProjectsEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') projectForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedProjectIndex: number;
  editedProject: Projects;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.projectsService.startedEditing.subscribe(
      (index: number) => {
        this.editedProjectIndex = index;
        this.editMode = true;
        this.editedProject = this.projectsService.getProject(index);
        this.projectForm.setValue({
          name: this.editedProject.name,
          description: this.editedProject.description,
          imagePath: this.editedProject.imagePath
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProject = new Projects(value.name, value.description, value.imagePath);
    if (this.editMode) {
      this.projectsService.updateProject(this.editedProjectIndex, newProject);
    } else {
      this.projectsService.addProject(newProject);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.projectForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.projectsService.deleteProject(this.editedProjectIndex);
    this.onClear();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteProject() {

  }

  onAddProject() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
