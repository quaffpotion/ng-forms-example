import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-name-editor",
  template: `
    <label>
      Input Name:
      <input type="text" [formControl]="name" />
    </label>
    <p>Name: {{ name.value }}</p>
    <button (click)="reset()">Reset</button>
  `,
  styleUrls: ["./name-editor.component.css"]
})
export class NameEditorComponent implements OnInit {
  name = new FormControl(""); // set initial value to the empty string

  constructor() {}

  ngOnInit() {}

  reset() {
    this.name.setValue("Nancy Pelosi");
  }
}
