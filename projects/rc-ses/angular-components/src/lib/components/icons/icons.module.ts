import { DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

@NgModule({
  imports: [
    MatIconModule,
    MatIconModule,
  ],
})
export class RcSesIconsModule {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIconLiteral(
      'rc-ses-check-circle',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#00a879"/><path fill="#fff" d="m18.533 9.03-8 8a.751.751 0 0 1-1.063 0l-3.5-3.5a.751.751 0 1 1 1.063-1.062l2.969 2.97 7.47-7.469a.751.751 0 0 1 1.062 1.063l-.001-.002Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-circle',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#1f2733"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-caret-left',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#0E6790" d="M10.354 12.646a.501.501 0 0 1-.707.708l-5-5a.5.5 0 0 1 0-.707l5-5a.5.5 0 1 1 .707.707L5.707 8l4.647 4.646Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-arrow-right',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="#1F2733" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.748.748 0 0 1 0 1.061Z"/></svg>`)
    );
  }
}
