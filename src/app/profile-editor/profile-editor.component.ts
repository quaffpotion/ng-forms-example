import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label>
        First Name:
        <input type="text" formControlName="firstName" />
      </label>

      <label>
        Last Name:
        <input type="text" formControlName="lastName" />
      </label>
      <button>Submit</button>
    </form>
    <button (click)="reset()">Reset Form</button>
    <button (click)="resetFirstName()">Reset First Name</button>
    <p>
      {{ profileForm.value | json }}
    </p>
  `,
  styleUrls: ["./profile-editor.component.css"]
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}

  /*
    update: seems it just watches for all button events type submit or otherwise
    In the template we bind this function to ngSubmit. Behind the scenes Angular
    will watch the form for when a button of type `submit` is clicked and then
    run this function.
  */
  onSubmit() {
    console.log(this.profileForm.value);
  }

  reset() {
    this.profileForm.setValue({
      firstName: "Paul",
      lastName: "Ryan"
    });
  }
  resetFirstName() {
    this.profileForm.patchValue({
      firstName: "Nancy"
    });
  }
}
