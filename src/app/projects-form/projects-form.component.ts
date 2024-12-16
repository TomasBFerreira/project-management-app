import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './projects-form.component.html',
  styleUrl: './projects-form.component.scss'
})
export class ProjectsFormComponent {
  projectForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    description: new FormControl('')
  });

  onSubmit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
    }
  }
}
