import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: 'rc-ses-service-form-container',
  standalone: true,
  templateUrl: 'service-form-container.html',
  imports: [],
  host: {
    class: 'rc-ses-element rc-ses-service-form-container'
  },
})
export class ServiceFormContainer implements AfterViewInit, OnDestroy, OnInit {
  public initialized: boolean | undefined;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _el: ElementRef,
    private _renderer: Renderer2,
  ) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
