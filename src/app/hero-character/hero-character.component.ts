import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-hero-character",
  templateUrl: "./hero-character.component.html",
  styleUrls: ["./hero-character.component.css"]
})
export class HeroCharacterComponent implements OnInit {
  heroForm = this.fb.group({
    name: ["", Validators.required],
    class: ["", Validators.required],
    stats: this.fb.group({
      hp: ["", Validators.required],
      attack: ["", Validators.required]
    }),
    inventory: this.fb.array([this.fb.control("")])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get inventory() {
    return this.heroForm.get("inventory") as FormArray;
  }

  get stats() {
    return this.heroForm.get("stats") as FormGroup;
  }

  addItem() {
    this.inventory.push(this.fb.control(""));
  }

  removeItem(index) {
    this.inventory.removeAt(index);
  }

  getStatus() {
    return this.heroForm["controls"].stats["status"];
  }
}
