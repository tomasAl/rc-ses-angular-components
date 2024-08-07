import { Component, OnInit, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AccordionDirective } from '../../../rc-ses/angular-components/src/lib/components/accordion/accordion';
import { ButtonDirective } from '../../../rc-ses/angular-components/src/lib/components/button/button';
import { FormField } from '../../../rc-ses/angular-components/src/lib/components/form/form-field/form-field';
import { InputDirective } from '../../../rc-ses/angular-components/src/lib/components/form/input/input/input';
// import { ServiceFormActions } from '../../../rc-ses/angular-components/src/lib/components/layout/service-form-actions/service-form-actions';
import { ServiceFormContainer } from '../../../rc-ses/angular-components/src/lib/components/layout/service-form-container/service-form-container';
import { ServiceHeader } from '../../../rc-ses/angular-components/src/lib/components/layout/service-header/service-header';
import { ServicePage } from '../../../rc-ses/angular-components/src/lib/components/layout/service-page/service-page';
import { ServiceWizardSteps } from '../../../rc-ses/angular-components/src/lib/components/layout/service-wizard-steps/service-wizard-steps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,

    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,

    AccordionDirective,
    ButtonDirective,
    FormField,
    InputDirective,

    ServiceHeader,
    ServicePage,
    ServiceWizardSteps,
    // ServiceFormActions,
    ServiceFormContainer,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    HttpClient,
  ],
})
export class AppComponent {
  accordion = viewChild.required(MatAccordion);

  readonly testInputFormControl = new FormControl('', [Validators.required]);

  value = 'Tekstas';
}
