import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() projects: Projects;
  @Input() index: number;

  ngOnInit(): void {
  }

}
