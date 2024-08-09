import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input, ContentChildren, QueryList, ChangeDetectorRef, model } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCommonModule, MatOption, MatOptionModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

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
export class SelectComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(MatOption) queryOptions!: QueryList<MatOption>;

  @Input() formControl!: FormControl;
  @Input() options!: { value: string, label: string, description?: string }[];

  @Input() placeholder: string = '';
  @Input() searchable: boolean | '' = false;
  @Input() multiple: boolean | '' = false;

  initialized: boolean = false;

  readonly selectAll = model(false);

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _element: ElementRef,
    private _renderer: Renderer2,
  ) {}

  ngOnInit() {
    if (this.searchable)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-select-searchable');

    if (this.multiple)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-select-multiple');
  }

  ngAfterViewInit() {
    this.initialized = true;
    console.debug(this.options);
  }

  ngOnDestroy() {
    this.initialized = false;
  }

  purposeOptions: { value: string, label: string, description?: string }[] = [
    { value: 'tikslas1', label: 'neTikslas 1' },
    { value: 'netikslas2', label: 'neTikslas 2' },
    { value: 'netikslas3', label: 'neTikslas 3' },
  ];
}
