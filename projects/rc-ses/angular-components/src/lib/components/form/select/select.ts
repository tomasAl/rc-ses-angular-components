import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input, ContentChildren, QueryList, ChangeDetectorRef, model, OnChanges, SimpleChanges } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCommonModule, MatOption, MatOptionModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

type Option  = { value: string, label: string, description?: string };
type Options  = Option[];

@Component({
  selector: 'rc-ses-select',
  standalone: true,
  templateUrl: 'select.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatCommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
  ],
  host: {
    class: 'rc-ses-element rc-ses-select'
  },
})
export class SelectComponent implements AfterViewInit, OnChanges, OnDestroy {
  @ContentChildren(MatOption) queryOptions!: QueryList<MatOption>;

  @Input() formControl!: FormControl;
  @Input() options!: Options;

  @Input() multiple: boolean | '' = false;
  @Input() panelWidth: 'auto' | 'dynamic' | null = 'auto';
  @Input() placeholder: string = '';
  @Input() searchable: boolean | '' = false;

  filteredOptions: Options = [];

  initialized: boolean = false;

  readonly selectAll = model(false);

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _element: ElementRef,
    private _renderer: Renderer2,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredOptions = changes['options'].currentValue
      ? changes['options'].currentValue
      : []
  }

  ngOnInit() {
    if (this.searchable)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-select-searchable');

    if (this.multiple)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-select-multiple');
  }

  ngAfterViewInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }

  purposeOptions: { value: string, label: string, description?: string }[] = [
    { value: 'tikslas1', label: 'neTikslas 1' },
    { value: 'netikslas2', label: 'neTikslas 2' },
    { value: 'netikslas3', label: 'neTikslas 3' },
  ];

  filterOptions = ($event: KeyboardEvent) => {
    $event.stopPropagation();
    const query = ($event.target as HTMLInputElement).value;

    this.filteredOptions = !query?.length
      ? this.options
      : this.options.filter((o) => o.label.indexOf(query) !== -1);
  }

  handleSelectAllChange = (checked: boolean) => {
    const filteredOptionValues: Option['value'][] = this.filteredOptions.map((o) => o.value) || [];

    if (checked) {
      this.formControl.setValue(filteredOptionValues)
    } else {
      const currentSelection: Option['value'][] = this.formControl.value || [];
      this.formControl.setValue(currentSelection.filter((c) => !filteredOptionValues.includes(c)))
    }
  }

  isFullSelection = () => {
    const currentSelection: Option['value'][] = this.formControl.value || [];

    if (this.filteredOptions.length === 0 || currentSelection.length === 0)
      return false;

    return this.filteredOptions.every((o) => currentSelection.includes(o.value));
  }

  isPartialSelection = () => {
    if (!this.filteredOptions.length || !this.formControl.value.length)
      return false;

    const currentSelection: Option['value'][] = this.formControl.value || [];
    return !this.isFullSelection() && this.filteredOptions.some((o) => currentSelection.includes(o.value));
  }
}
