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
  }
}
