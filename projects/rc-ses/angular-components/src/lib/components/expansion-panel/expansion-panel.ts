import { DOCUMENT } from "@angular/common";
import { Directive, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input } from "@angular/core";
import { MatListModule } from '@angular/material/list';

@Directive({
  selector: '[rc-ses-expansion-panel]',
  host: {
    class: 'rc-ses-element rc-ses-expansion-panel'
  },
})
export class ExpansionPanelDirective implements AfterViewInit, OnDestroy, OnInit {
  @Input() path: { label: string, path: string }[] = [];

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
