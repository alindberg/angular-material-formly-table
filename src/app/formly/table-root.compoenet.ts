import { Component, OnInit } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FieldArrayType
} from "@ngx-formly/core";

@Component({
  selector: "app-table-root",
  template: `
    <mat-card class="mat-elevation-z3">
      <mat-card-title>Mat table Test</mat-card-title>
      <mat-card-content>
        <formly-form
          [form]="form"
          [model]="model"
          [fields]="fields"
          [options]="options"
        ></formly-form>
      </mat-card-content>
    </mat-card>
  `
})
export class TableRootComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {
    tblData: [
      { myDate: "2012-03-29", myName: "John" },
      { myDate: "2014-01-01", myName: "Mary" }
    ]
  };
  fields: FormlyFieldConfig[] = [
    {
      type: "array",
      key: "tblData",
      templateOptions: {
        text: "Add to Array"
      },
      fieldArray: {
        templateOptions: {
          text: "Array of Inputs"
        },
        fieldGroupClassName: "display-flex",
        fieldGroup: [
          {
            key: "myDate",
            type: "input",
            className: "flex-1",
            defaultValue: '2021-03-01',
            templateOptions: {
              order: 10,
              type: "date",
              label: "MyDate1",
              placeholder: "your date here"
            }
          },
          {
            key: "myName",
            type: "input",
            className: "flex-4",
            templateOptions: {
              order: 20,
              label: "Your Name Here",
              required: true
            }
          },
          {
            key: "btn1",
            type: "button",
            templateOptions: {
              type: "remove",
              class: "mat-mini-fab",
              label: "Remove",
              order: 99,
              color: "warn",
              icon: "delete"
            }
          }
        ]
      }
    }
  ];

  ngOnInit() {}
}
