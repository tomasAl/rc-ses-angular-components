import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonDirective } from '../../../rc-ses/angular-components/src/lib/components/button/button';
import { InputDirective } from '../../../rc-ses/angular-components/src/lib/components/form/input/input/input';
import { FormField } from '../../../rc-ses/angular-components/src/lib/components/form/form-field/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterOutlet,

    ButtonDirective,
    InputDirective,
    FormField,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly testInputFormControl = new FormControl('', [Validators.required]);

  value = 'Tekstas';
}
