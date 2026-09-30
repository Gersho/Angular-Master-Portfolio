import { Component, input, InputSignal } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { AssetPaths } from '../../../enums/asset-paths.enum';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
      public assetPaths = AssetPaths;
    projectData: InputSignal<Project> = input.required<Project>();
}
