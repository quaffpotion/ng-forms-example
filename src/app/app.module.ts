import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

//Added:
import { ReactiveFormsModule } from "@angular/forms";
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [AppComponent, NameEditorComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
