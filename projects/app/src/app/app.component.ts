import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonDirective } from '../../../rc-ses/angular-components/src/lib/components/button/button';
import { InputDirective } from '../../../rc-ses/angular-components/src/lib/components/form/input/input/input';
import { FormField } from '../../../rc-ses/angular-components/src/lib/components/form/form-field/form-field';
import { ServiceHeader } from '../../../rc-ses/angular-components/src/lib/components/layout/service-header/service-header';
import { ServicePage } from '../../../rc-ses/angular-components/src/lib/components/layout/service-page/service-page';
import { ServiceWizardSteps } from '../../../rc-ses/angular-components/src/lib/components/layout/service-wizard-steps/service-wizard-steps';
import { HttpClient } from '@angular/common/http';
import { ServiceFormContainer } from '../../../rc-ses/angular-components/src/lib/components/layout/service-form-container/service-form-container';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

    ButtonDirective,
    FormField,
    InputDirective,

    ServiceHeader,
    ServicePage,
    ServiceWizardSteps,
    ServiceFormContainer,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    HttpClient,
  ],
})
export class AppComponent {
  readonly testInputFormControl = new FormControl('', [Validators.required]);

  value = 'Tekstas';
}
