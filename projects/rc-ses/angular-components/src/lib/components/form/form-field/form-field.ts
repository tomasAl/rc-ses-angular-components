import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input, ContentChild, signal } from "@angular/core";
import { FormControl, FormsModule } from "@angular/forms";
import { MatError, MatFormField, MatFormFieldControl, MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { InputDirective } from "../input/input/input";

@Component({
  selector: 'rc-ses-form-field',
  standalone: true,
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatError,
    InputDirective,
  ],
  host: {
    class: 'rc-ses-element rc-ses-form-field'
  },
})
export class FormField implements AfterViewInit, OnDestroy, OnInit {
  @ContentChild(MatFormFieldControl) control!: MatFormFieldControl<any>;

  @ContentChild(MatFormField, { read: ElementRef }) formFieldRef!: ElementRef<MatFormField>;
  @ContentChild(MatFormField) formField!: MatFormField;

  @ContentChild(MatInput, { read: ElementRef }) inputRef!: ElementRef<MatInput>;
  @ContentChild(MatInput) input!: MatInput;

  @Input() label: string | undefined = undefined;
  @Input() labelSubtitle: string | undefined = undefined;

  @Input() formControl: FormControl | undefined = undefined;

  public initialized: boolean = false;

  errorMessage = signal('');

  updateErrorMessage() {
    if (!this.formControl) return;

    if (this.formControl.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.formControl.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _element: ElementRef,
    private _renderer: Renderer2,
  ) {}

  ngOnInit() {
    if (this.labelSubtitle) {
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-has-label-subtitle');
    }
  }

  ngAfterViewInit() {
    console.debug(this.input);
    // console.debug(this.control);
    if (this.input.readonly) {
      this._renderer.addClass(this.formField._elementRef.nativeElement, 'mat-form-field-readonly');
      this._renderer.addClass(this.formFieldRef.nativeElement, 'mat-form-field--readonly');
      // this._renderer.addClass(this.formFieldRef.nativeElement, 'mdc-text-field--readonly');
      // this._renderer.addClass(this.formFieldRef.nativeElement, 'mdc-text-field--disabled');
    }

    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
