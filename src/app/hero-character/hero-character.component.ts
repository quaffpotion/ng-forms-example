import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-hero-character",
  templateUrl: "./hero-character.component.html",
  styleUrls: ["./hero-character.component.css"]
})
export class HeroCharacterComponent implements OnInit {
  heroForm = this.fb.group({
    name: [""],
    class: [""],
    stats: this.fb.group({
      hp: [""],
      attack: [""]
    }),
    inventory: this.fb.array([this.fb.control("")])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get inventory() {
    return this.heroForm.get("inventory") as FormArray;
  }

  addItem() {
    this.inventory.push(this.fb.control(""));
  }

  removeItem(index) {
    this.inventory.removeAt(index);
  }
}
