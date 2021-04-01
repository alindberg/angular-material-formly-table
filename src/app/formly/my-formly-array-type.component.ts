import {  
  Component,
  Injector,
  OnInit,
  ViewChild
} from "@angular/core";
import { FieldArrayType, FormlyFieldConfig } from "@ngx-formly/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";

interface FieldsToRenderStruct {
  name: string;
  key: string | number | string[];
  type: string;
  order: number;
}

@Component({
  selector: "app-my-formly-array-type",
  template: `
    <mat-card>
      <button
        class="example-icon"
        mat-raised-button
        color="accent"
        (click)="add()"
      >
        <mat-icon>add</mat-icon>
        {{ to.text }}
      </button>

      <table
        mat-table
        #formTable
        [dataSource]="dataSource"
        [multiTemplateDataRows]="true"
      >
        <ng-container
          [matColumnDef]="currentField.key"
          *ngFor="let currentField of fieldsToRender; let i = index"
        >
          <th mat-header-cell *matHeaderCellDef>{{ currentField.name }}</th>
          <td mat-cell *matCellDef="let element">
            <formly-field [field]="element.fieldGroup[i]"></formly-field>
            <!-- <pre><code>{{currentField.key}}#{{i}}-{{element.fieldGroup[i] |json}}</code></pre> -->
          </td>
        </ng-container>
        <tr
          mat-header-row
          *matHeaderRowDef="getDisplayColumns(); sticky: true"
        ></tr>
        <tr mat-row *matRowDef="let row; columns: getDisplayColumns()"></tr>
      </table>

      <ng-container>
        <pre><code>model:{{model |json}}</code></pre>
        <pre><code>form.value:{{form.value |json}}</code></pre>
        <pre><code>field.fieldGroup:{{field.fieldGroup |json}}</code></pre>
      </ng-container>
    </mat-card>
  `, 
})

export class MyFormlyArrayTypeComponent extends FieldArrayType   implements OnInit {
  @ViewChild("formTable", { static: true }) table: MatTable<any>;

  public dataSource: MatTableDataSource<FormlyFieldConfig> = new MatTableDataSource();

  public fieldsToRender: FieldsToRenderStruct[] = [];
  public headerFields: string[] = [];

  constructor(injector: Injector) {
    super();
  }
  ngOnInit(): void {
    this.field.templateOptions.remove = this.remove.bind(this);
    this.dataSource.data = this.field.fieldGroup;
    this.fieldsToRender = this.buildColumnInfo(this.field.fieldArray);
  }

  buildColumnInfo(fa: FormlyFieldConfig): FieldsToRenderStruct[] {
    const _arrToReturn: FieldsToRenderStruct[] = [];
    fa.fieldGroup.forEach(fff => {
      _arrToReturn.push({
        name: fff.templateOptions.label,
        key: fff.key,
        type: fff.type,
        order: +fff.templateOptions.order
      });
    });
    return _arrToReturn.sort((a, b) => (a.order > b.order ? 1 : -1));
  }

  getDisplayColumns() {
    const retArray: string[] = [];
    this.fieldsToRender.forEach(ftr => {
      if (ftr.key) retArray.push(ftr.key.toString());
    });
    return retArray;
  }

  remove(e?: any) {
    super.remove(e);
    this.table.renderRows();
  }

  add(e?: any) {
    super.add(e);
    this.table.renderRows();
  }
}
