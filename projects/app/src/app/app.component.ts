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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AccordionDirective } from '../../../rc-ses/angular-components/src/lib/components/accordion/accordion';
import { ButtonDirective } from '../../../rc-ses/angular-components/src/lib/components/button/button';
import { FormField } from '../../../rc-ses/angular-components/src/lib/components/form/form-field/form-field';
import { InputDirective } from '../../../rc-ses/angular-components/src/lib/components/form/input/input/input';
// import { ServiceFormActions } from '../../../rc-ses/angular-components/src/lib/components/layout/service-form-actions/service-form-actions';
import { ServiceFormContainer } from '../../../rc-ses/angular-components/src/lib/components/layout/service-form-container/service-form-container';
import { ServiceHeader } from '../../../rc-ses/angular-components/src/lib/components/layout/service-header/service-header';
import { ServicePage } from '../../../rc-ses/angular-components/src/lib/components/layout/service-page/service-page';
import { ServiceWizardSteps } from '../../../rc-ses/angular-components/src/lib/components/layout/service-wizard-steps/service-wizard-steps';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from '../../../rc-ses/angular-components/src/lib/components/form/select/select';

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
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,

    AccordionDirective,
    ButtonDirective,
    FormField,
    InputDirective,
    SelectComponent,

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
  accordion = viewChild.required(MatAccordion);

  form = new FormGroup({
    tikslasCustom: new FormControl(''),
  });
  tikslasCustom = new FormControl('');

  readonly testInputFormControl = new FormControl('', [Validators.required]);

  value = 'Tekstas';

  purposeModel: string = '';
  purposeOptions: { value: string, label: string, description?: string }[] = [
    { value: 'tikslas1', label: 'Tikslas 1' },
    { value: 'tikslas2', label: 'Tikslas 2' },
    { value: 'tikslas3', label: 'Tikslas 3' },
  ];

  purposeOptionsWithDescription: { value: string, label: string, description?: string }[] = [
    { value: 'tikslas1', label: 'Tikslas 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { value: 'tikslas2', label: 'Tikslas 2', description: 'Lorem Ipsum is simply dummy text.' },
    { value: 'tikslas3', label: 'Tikslas 3', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
  ];

  purposeGroups: { name: string, disabled: boolean, items: { value: string, label: string, description?: string }[] }[] = [
    {
      name: 'Grupė 1',
      disabled: false,
      items: [
        { value: 'tikslas1', label: 'Tikslas 1' },
        { value: 'tikslas2', label: 'Tikslas 2' },
        { value: 'tikslas3', label: 'Tikslas 3' },
      ],
    },
    {
      name: 'Grupė 2',
      disabled: false,
      items: [
        { value: 'tikslas4', label: 'Tikslas 4' },
        { value: 'tikslas5', label: 'Tikslas 5' },
        { value: 'tikslas6', label: 'Tikslas 6' },
      ],
    },
  ];
}
