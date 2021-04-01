import { Component }                 from '@angular/core';
import { FieldType, FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-my-formly-button-type',
  template: `
              <button mat-button
                      [class]="to.class"
                      [style]="to.style"
                      [color]="to.color"
                      (click)="onClick($event)"
              >
                {{to.textBefor}}
                <mat-icon *ngIf="to.icon.length > 0">{{to.icon}}</mat-icon>
                {{to.textAfter}}
              </button>
            `,
  styles:   []
})
export class MyFormlyButtonTypeComponent extends FieldType {
  onClick($event) {
    switch ( this.to.type ) {
      case 'remove':
        const _i = this.field.parent.key;
        this.field.parent.parent.templateOptions.remove(_i);
        break;
      default:

    }

  }

}
