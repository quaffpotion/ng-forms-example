import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

//Added:
import { ReactiveFormsModule } from "@angular/forms";
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroCharacterComponent } from './hero-character/hero-character.component';

@NgModule({
  declarations: [AppComponent, NameEditorComponent, ProfileEditorComponent, HeroCharacterComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
